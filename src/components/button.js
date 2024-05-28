import React from "react";
import './button.css';
import { Link } from "react-router-dom";

const STYLES = ['btn--1', 'btn--2', 'btn--3', 'btn--4'];


export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    href
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const buttonContent = (
        <button
          className={`btn ${checkButtonStyle}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      );
    
      return href ? (
        <Link to={href} className="btn-mobile">
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      );
};
