import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
      return (
            <section className='container mx-auto py-5'>
                  <h1 className="section-title">CONTACT</h1>
                  <div className='row'>
                        <div className="col-12 col-md-6 g-5">
                              <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>Your name</Form.Label>
                                          <Form.Control type="text" placeholder="Your name here..." />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>Email address</Form.Label>
                                          <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                          <Form.Label>Your message</Form.Label>
                                          <Form.Control as="textarea" rows={5} />
                                    </Form.Group>

                                    <Button className="rounded-pill primaryButton">Send message</Button>
                              </Form>
                        </div>

                        <div className="col-12 col-md-6 g-5">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233478.81458086573!2d90.12894746578336!3d23.88584269165226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e9cdc8bac3b5%3A0xc155530f1e9923d6!2sSavar%20Upazila!5e0!3m2!1sen!2sbd!4v1651750643717!5m2!1sen!2sbd" width="100%" height="450" style={{border:'0'}}loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                  </div>
            </section>
      );
};

export default Contact;