import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from "../../shared/PrimaryButton/PrimaryButton";

const Error = () => {
      return (
            <section style={{ margin: "130px 0" }} className="d-flex align-items-center justify-content-center flex-column">
                  <FontAwesomeIcon icon={faFaceSadTear} style={{fontSize: "150px"}} className="mb-2" />
                  <h2 className="fs-1 mb-0">OPPS!</h2>
                  <h4 className='fs-4 my-3'>ERROR 404: PAGE NOT FOUND.</h4>
                  <PrimaryButton text="Go back" path="/" />
            </section>
      );
};

export default Error;