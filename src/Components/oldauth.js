const Spotify_Auth = {
    apiData : {
        urls : {
            //authorization
            auth : "https://accounts.spotify.com/authorize",
            //app
            account : "/me",
            base : "https://api.spotify.com/v1",
            search : "/searach",
            categories : "/browse/categories",
            recommendations : "/recommendations",
        },

        client : {
            id : '7aad31ea207a42b0a30dc8b21efb2c03',
        },

        user : {
            id : undefined,
            token : undefined,
        }

    },

    init : () => {
        //Checkpopup
        //Get user state //not logged //logged
        //Setup AI based on state

        window.spotifyCallback = (payload) => {
            if (payload != "error=access_denied") {
                if (Spotify_Auth.getUserAccount(payload) != null) {
                    Cookies.setCookie('access_token', payload, 1.0/24.0);
                    Spotify_Auth.checkCookieUser();
                };
            };
            popup.close();
        }

        const urlAuth = Spotify_Auth.getUrlAuth();
        if (urlAuth != null) {
            //CLOSE THE POPUP PAGE AND RETURN THE TOKEN
            //https://medium.com/@leemartin/creating-a-simple-spotify-authorization-popup-in-javascript-7202ce86a02f
            window.opener.spotifyCallback(urlAuth);
        };

        Spotify_Auth.checkCookieUser();
    },

    
    checkCookieUser : async () => {
        //Check user state //logged in?
        const cookieToken = Cookies.getCookie('access_token');
        if (cookieToken == null) {return;};
        Spotify_Auth.getUserAccount(cookieToken);
    },

    getUserAccount : async (token) => {
        if (token == null || token == undefined){
            return undefined;
        }
        //Return: true if successful, false otherwise
        const urls = Spotify_Auth.apiData.urls;
        const params = {'Authorization' : 'Bearer ' + token};
        await API.getRequest(urls.base + urls.account, params)
          .then((response) => {
              if (Object.keys(response)[0] == "error") {
                Spotify_Auth.apiData.user = {
                    id : undefined,
                    token : undefined,
                }
              }
              else {
                Spotify_Auth.apiData.user = {
                    id : response.id,
                    token : token,
                };
                console.log(Spotify_Auth.apiData.user);
              };
            });
    },

    getUrlAuth : () => {
        let url = window.location.href;
        //look for error
        const queryString = url.split('?')[1];
        if (queryString) {
            const params = queryString.split('&');
            for (i in params) {
                if (params[i] == 'error=access_denied') {
                    return params[i];
                };
            };
        };

        //look for token
        const hash = window.location.hash.substr(1).split('&');
        for (let index in hash){
            const split = hash[index].split('=');
            if (split[0] == 'access_token') {
                return split[1];
            }
        }
        return null;
    },

    login : () => {
        let params = {
            'client_id' : Spotify_Auth.apiData.client.id,
            'response_type' : 'token',
            'redirect_uri' : 'http://localhost:5500/',
            'state' : '123test',
        }
        // &-seperated params
        params = new URLSearchParams(params).toString();

        const AUTHORIZATION_URL = Spotify_Auth.apiData.urls.auth + '?' + params;

        popup = window.open(
            AUTHORIZATION_URL,
            'Login with Spotify',
            'width=800,height=600'
          );
        popup.focus();
    }
} //Spotify_Auth

const Cookies = {
    getCookie : (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return null;
    },

    setCookie : (cname, cvalue, exdays) => {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
}



Spotify_Auth.init();
