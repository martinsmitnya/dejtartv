import React, { useEffect, useState } from 'react';

function Esemenyek() {
  const [error, setError] = useState('');

  useEffect(()=>{
    fetch().then(response=> response.json()).then(data=>{
      //setData in any way
    }).catch(error => setError(error))
  }, [])


  return (
    <p>Esemenyek</p>
  );
}

export default Esemenyek;