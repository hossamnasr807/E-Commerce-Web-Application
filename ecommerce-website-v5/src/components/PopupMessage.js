import React from 'react';
import './PopupMessage.css';

const PopupMessage = ({ message, type }) => {
  if (!message) return null; // Do not render if no message

  return <div className={`popup-message ${type}`}>{message}</div>;
};

export default PopupMessage;
