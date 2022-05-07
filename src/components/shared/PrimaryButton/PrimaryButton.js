import React from 'react';
import "./PrimaryButton.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrimaryButton = ({text, path, styles}) => {

      return <Link to={path}><Button 
      className={`rounded-pill primaryButton ${styles && styles}`}
      >{text}</Button></Link> 
};

export default PrimaryButton;