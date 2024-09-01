import React, { useState } from 'react';

function RoutePlanning() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <>
      <h2>Route Planning</h2>
      <input 
        type="text" 
        placeholder="source" 
        value={source} 
        onChange={(e) => setSource(e.target.value)} 
      />
      to
      <input 
        type="text" 
        placeholder="destination" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
      />
      <button>Plan Route</button>
    </>
  );
}

export default RoutePlanning;
