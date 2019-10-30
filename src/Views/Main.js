// Views/Home.jsx
 
import React from 'react';
import { useUser } from '../Hooks/UseUser'
// import Loading from './Loading';
 
export default function Home() {
  const { user } = useUser();


  return (
    <div>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}