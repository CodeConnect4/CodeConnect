import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function Homepage() {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "CodeConnect: Home"
  }, [])

  return (
    <div>
        <center><h1 style={{color:'rgb(31, 162, 103)'}}>Welcome to CodeConnect, {user.data.displayName}!</h1></center>
    </div>
  );
}