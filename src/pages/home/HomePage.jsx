import React from 'react';
import backgroundImage from './bg3.jpg'; // Import the local image

function HomePage() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className=" bg-contain bg-center h-[750px] rounded-3xl mx-20 mt-3 " style={backgroundStyle}>
      
      
      <h1 className=' text-7xl font-bold font-serif  text-slate-100 pl-32 pt-48'>Exprole The World With Us</h1>
    <div>
      
    </div>
    </div>
  );
}

export default HomePage;
