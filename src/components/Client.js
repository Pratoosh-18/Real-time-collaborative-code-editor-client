import React from 'react';

function Client({username}) {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 11)]; // Limiting to '0' to 'A'
    }
    return color;
  };

  let capitalizedUsername = capitalizeFirstLetter(username.toString());
  let firstLetter = capitalizedUsername.charAt(0);
  let boxColor = getRandomColor();

  return (
    <div className="my-2 flex items-center">
      <div 
        className="box font-semibold text-lg" 
        style={{
          backgroundColor: boxColor, 
          color: 'white',
          width: '40px', 
          height: '40px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          borderRadius: '50%',
          marginRight: '10px'
        }}>
        {firstLetter}
      </div>
      <div className='mx-1 text-lg'>{capitalizedUsername}</div>
    </div>
  );
}

export default Client;
