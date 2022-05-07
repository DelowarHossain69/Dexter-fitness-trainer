import React from 'react';
import "./ServiceCart.css";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const ServiceCart = ({ serviceInfo }) => {
      const { name, price, services } = serviceInfo;

      return (
            <div className="col-12 col-md-4 service-cart p-0 rounded shadow">
                  <div className='service-name p-2 text-white text-center'>
                        <h4>{name}</h4>
                  </div>
                  <div className='service-price py-4 text-center'>
                        <h1>${price}<span>/mo</span></h1>
                  </div>
                  <div className='p-3'>
                        <ul className='list-unstyled' style={{ lineHeight: "30px" }}>
                              {
                                    services?.map(info => <li><FontAwesomeIcon icon={faCircleCheck} /> {info ? info : ' -- '}</li>)
                              }
                        </ul>
                  </div>

                  <div className='text-center p-3'>
                        <PrimaryButton text="Checkout" path="/checkout" className="w-75" styles="w-75" />
                  </div>
            </div>
      );
};

export default ServiceCart;