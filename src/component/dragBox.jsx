import React, { useState } from 'react';
import { limitationWidth } from '../utils/limitationWidth';

const DraggableDiv = ({ listWidth, setListWidth, listWidthSize }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [xPosition, setXPosition] = useState(listWidth);

  const handleDragStart = (event) => {
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0); // For some browsers to enable drag-and-drop

    setIsDragging(true);
    setOffsetX(event.clientX - event.target.getBoundingClientRect().left);
  };



  const handleDrag = (event) => {
    if (!isDragging) return;

    let x = limitationWidth(event, offsetX, listWidthSize.max, listWidthSize.min)

    setListWidth(x)
    setXPosition(x);
  };

  const handleDragEnd = (event) => {
    setIsDragging(false);

    let x = limitationWidth(event, offsetX, listWidthSize.max, listWidthSize.min)

    setListWidth(x)
    setXPosition(x);

  };

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className='resizeBtn'
      style={{
        left: `${xPosition + 8}px`,
      }}
    />
  );
};

export default DraggableDiv;
