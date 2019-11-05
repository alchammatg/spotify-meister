import { createMuiTheme } from '@material-ui/core/styles';
const Spotify = require('../spotify-api');

export const barTheme = createMuiTheme({
  palette: {
    primary: {main: Spotify.colors.black},
    secondary: {main: Spotify.colors.green},
    background: {default: Spotify.colors.black},
  },
});

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: Spotify.colors.white,
    },
    secondary: {
      main: Spotify.colors.green
    },
    background: {
      default: Spotify.colors.grey,
      dark: Spotify.colors.black,
    },
  },
});