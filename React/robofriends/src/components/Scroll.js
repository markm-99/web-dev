import React from 'react';
export const Scroll = (props) => {
  return (
    // makes element scrollable, line is black, height of scrollable content is underneath searchbar
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
        {/* array of robot cards */}
        {props.children}
    </div>
  );
};

export default Scroll;
