import React from 'react';

const style = { color: 'red' };

const Error = ({ children }) => {
  if (typeof children === 'object' && children !== null) {
    return <div style={style}>{JSON.stringify(children)}</div>;
  } else {
    return <div style={style}>{props.children}</div>;
  }
};

export default Error;
