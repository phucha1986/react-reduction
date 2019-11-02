import React from 'react';
import Moveable from 'react-moveable';
const frame = {
  translate: [0, 0],
};
const PlatingPage = () => {
  return (
    <React.Fragment>
      <div className="target" width="100px" height="100px">
        <div className="moveable" >Testing</div>
      </div>
      
      <Moveable
    target={document.querySelector(".target")}
    draggable={true}
    
    throttleDrag={0}
    onDragStart={({ set }) => {
        set(frame.translate);
    }}
    onDrag={({ target, beforeTranslate }) => {
        frame.translate = beforeTranslate;
        target.style.transform
            = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
    }}
    onDragEnd={({ target, isDrag, clientX, clientY }) => {
        console.log("onDragEnd", target, isDrag);
    }} />
    </React.Fragment>
  );
};

export default PlatingPage;
