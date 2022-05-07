import React from 'react';
import reviewer1 from "../../../../images/reviewer/reviewr1.jpg"
import reviewer2 from "../../../../images/reviewer/reviewer2.jpg"
import reviewer3 from "../../../../images/reviewer/reviewer3.jpg"

const Reviews = () => {
      return (
            <section className='container mx-auto py-5'>
                  <h1 className='section-title'>REVIEWS</h1>
                  <div className='row mt-5 gy-5'>
                        <div className='col-12 col-md-4 d-flex align-items-start'>
                              <img src={reviewer1} alt="" className='w-25 rounded-pill'/>
                              <div className='ms-3'>
                                    <h3 className='fs-5'>LEE DANIEL</h3>
                                    <p style={{fontSize: "13px"}}>LDon't like what you see in the mirror? Lose fat off your most hated body parts and tone up the rest, so to you look great in time for summer</p>
                              </div>
                        </div>
                        <div className='col-12 col-md-4 d-flex align-items-start'>
                              <img src={reviewer2} alt="" className='w-25 rounded-pill'/>
                              <div className='ms-3'>
                                    <h3 className='fs-5'>KEVIN HOGGARD</h3>
                                    <p style={{fontSize: "13px"}}>Feel lethargic and exhausted all the time? Have the energy to power through the day and lead an active social life</p>
                              </div>
                        </div>
                        <div className='col-12 col-md-4 d-flex align-items-start'>
                              <img src={reviewer3} alt="" className='w-25 rounded-pill'/>
                              <div className='ms-3'>
                                    <h3 className='fs-5'>STEVE HAVARD</h3>
                                    <p style={{fontSize: "13px"}}>Feel long hours at your desk are ruining your posture? Rid yourself of back pain making you feel older than you are!</p>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Reviews;