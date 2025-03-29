import React from 'react';


const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: ' rgb(218, 218, 231)',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(205, 200, 231, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: 'blue',
  };

  const greetingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'blue',
  };

  return (
    <div style={containerStyle}>
      <p style={greetingStyle}>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
