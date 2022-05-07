import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
      const [agree, setAgree] = useState(false);

      const agreeHendeler = (event) => {
            setAgree(event.target.checked);
      }     

      const formSubmitHendeler = (event) => {
            event.preventDefault();

            toast.success('Thank you.', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
            });

      }

      return (
            <section className='w-50 mx-auto my-5'>
                  <Form onSubmit={formSubmitHendeler}>

                        <ToastContainer />

                        <h1 className='section-title mb-5'>Please checkout</h1>

                        <Form.Group className="mb-3" controlId="formBasicName">
                              <Form.Label>Full Name</Form.Label>
                              <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress1">
                              <Form.Label>Address Line 1</Form.Label>
                              <Form.Control type="text" placeholder="Address Line 1" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                              <Form.Label>Address Line 2</Form.Label>
                              <Form.Control type="text" placeholder="Address Line 2" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Agree trams and condition" onClick={agreeHendeler} />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!agree}>
                              Submit
                        </Button>
                  </Form>
            </section>
      );
};

export default Checkout;