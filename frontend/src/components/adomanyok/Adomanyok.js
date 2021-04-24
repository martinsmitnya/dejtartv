import React, { useEffect, useState } from 'react';

function Adomanyok() {
  const [error, setError] = useState('');

  useEffect(() => {
    fetch().then(response => response.json()).then(data => {
      //setData in any way
    }).catch(error => setError(error))
  }, [])




  return (
    <p>Adomanyok</p>
  );
}

export default Adomanyok;