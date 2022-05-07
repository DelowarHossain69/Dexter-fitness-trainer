import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
      return (
            <section style={{height: "90vh"}} className="d-flex align-items-center justify-content-center">
                  <Spinner animation="grow" variant="dark" />
            </section> 
      );
};

export default Loading;