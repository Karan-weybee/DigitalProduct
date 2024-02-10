import React, { useEffect, useState } from 'react';

const MagnifierZoomImage = ({ url, altText }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleMouseEnter = (e) => {
  
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    setIsZoomed(true);
  };

  const handleMouseMove = (e) => {
    // console.log("zoom")
    // console.log(position)
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleTouchStart = (e) => {
    setPosition({
      x: e.touches[0].clientX - e.target.getBoundingClientRect().left,
      y: e.touches[0].clientY - e.target.getBoundingClientRect().top,
    });
    setIsZoomed(true);
  };

  const handleTouchMove = (e) => {
    setPosition({
      x: e.touches[0].clientX - e.target.getBoundingClientRect().left,
      y: e.touches[0].clientY - e.target.getBoundingClientRect().top,
    });
  };

  return (
    <div
    style={{display:'flex',gap:'10px'}}
    
    >
        <div
          className="zoom-container"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
      <img src={url} alt={altText} style={{width:'300px'}}/>
      </div>
      {isZoomed && (
        <div className="zoomed-image" style={{zIndex:'90', width:'345px', backgroundImage: `url(${url})`, backgroundPosition: `calc(-${position.x}px - 200px) calc(-${position.y}px - 200px)`,backgroundRepeat:'no-repeat'   }} />
      )}
    </div>
  );
};

export default MagnifierZoomImage;
