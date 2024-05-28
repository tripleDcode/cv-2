import React from "react";
import './sidebutton.css';
import { Link } from "react-router-dom";

const STYLES = ['sbtn--1', 'sbtn--2', 'sbtn--3', 'sbtn--4'];


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
          className={`s-btn ${checkButtonStyle}`}
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

