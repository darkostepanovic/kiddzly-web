import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <Link to="/">Go Home</Link>
    <h1>This page does not exist</h1>
  </>
);

export default NotFound;
