import React from 'react';
import trainerImg from '../../../../images/img/coach.jpg';
import PrimaryButton from '../../../shared/PrimaryButton/PrimaryButton';

const AboutTrainer = () => {
      return (
            <div className='mx-auto py-5 g-5' style={{width: '90%'}}>
                  <div className='row align-items-center g-3'>
                        <div className='col-12 col-md-5'>
                              <img src={trainerImg} alt="gym coach mx-auto" style={{maxWidth: '80%'}}/>
                        </div>
                        <div className='col-12 col-md-7'>
                              <h1>ABOUT TRAINER</h1>
                              <h6>10 YEARS OF EXPERIENCE IN FITNESS</h6>
                              <p>A personal trainer is an individual who has earned a certification that demonstrates they have achieved a level of competency for creating and delivering safe and effective exercise programs for apparently healthy individuals and groups or those with medical clearance to exercise. </p>
                              <PrimaryButton text="VIEW OUR PLANS" path="/"></PrimaryButton>
                        </div>
                  </div>

                  <div className='row align-items-center justify-content-between text-center py-5 mt-5 g-5'>
                        <div className='col-12 col-md-3'>
                              <h2>211</h2>
                              <span>MEMBERS</span>
                        </div>
                        <div className='col-12 col-md-3'>
                              <h2>150</h2>
                              <span>CLASSES</span>
                        </div>
                        <div className='col-12 col-md-3'>
                              <h2>420</h2>
                              <span>PROGRAMS</span>
                        </div>
                        <div className='col-12 col-md-3'>
                              <h2>70</h2>
                              <span>AWARDS</span>
                        </div>
                  </div>
            </div>
      );
};

export default AboutTrainer;