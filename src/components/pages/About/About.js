import React from 'react';
import myPic from "../../../images/img/delowar.jpg";

const About = () => {
      return (
            <section className='container mx-auto my-5'>
                  <div className="row g-5">
                        <div className="col-12 col-md-6 align-items-center">
                              <div className='w-50 mx-auto'>
                                    <img className='w-100 shadow rounded' src={myPic} alt="delowar pic" />
                              </div>
                        </div>
                        <div className="col-12 col-md-6">
                              <h2>Delowar Hossain</h2>
                              <p>My only goal is to be a full stack developer. I want to be a good quality developer and I want to see my success in a few month. This is my only goal.</p>
                        </div>
                  </div>
            </section>
      );
};

export default About;