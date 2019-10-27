// Views/Home.jsx
 
import React from 'react';
import Login from '../Components/Login'
import { useUser } from '../Hooks/UseUser'
 
export default function Home() {
  const { user } = useUser();

  return (
    <div>
        {
          user.name? <h1>{'Hello, ' + user.name}</h1> : <Login />
        }
    </div>
  );
}