// Views/Home.jsx
 
import React from 'react';
import { useUser } from '../Hooks/UseUser'
import Loading from './Loading';
import AppBar from '../Components/standard/AppBar'
const Login = React.lazy(() => import('../Views/Login'));
const Main = React.lazy(() => import('../Views/Main'));

 
export default function Home() {
  const { user, ready } = useUser();

  // return (<Loading />);
  if (ready === false) {
    return (<Loading message="Retrieving account data..."/>)
  }


  return (
    <div>
      <AppBar />
      <React.Suspense fallback={<Loading message="Retrieving account data..."/>}>
      {
          user.display_name? <Main /> : <Login />
        }
      </React.Suspense>
    </div>
  );
}