import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
