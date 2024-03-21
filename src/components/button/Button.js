import React from 'react';

// Style
import './Button.css';

const Button = ({ link, text, title }) => {
  return (
    <a href={link} className="button" title={title}>
      {text}
    </a>
  );
};

export default Button;
