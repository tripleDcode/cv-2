import React from "react";
import './mobilebutton.css';
import { Link } from "react-router-dom";

const STYLES = ['m-btn--1', 'm-btn--2', 'm-btn--3', 'm-btn--4'];


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
          className={`m-btn ${checkButtonStyle}`}
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
