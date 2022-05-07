import React from 'react';
import "./Results.css";
import result1 from '../../../../images/result/result1.jpg';
import result2 from '../../../../images/result/result2.jpg';
import result3 from '../../../../images/result/result3.jpg';
import result4 from '../../../../images/result/result4.jpg';
import result5 from '../../../../images/result/result5.jpg';
import result6 from '../../../../images/result/result6.jpg';
import result7 from '../../../../images/result/result7.jpg';
import result8 from '../../../../images/result/result8.jpg';
import result9 from '../../../../images/result/result9.jpg';

const Results = () => {
      return (
            <div className="container mx-auto py-5">
                  <h2 className='section-title'>RESULTS</h2>
                  <p className='section-sub-title'>A personal trainer is an individual who has earned a certification that demonstrates they have achieved a level</p>

                  <div className='row mt-5'>

                        <div className='col-12 col-md-4 g-0'>
                              <div className="row overflow-hidden">
                                    <img className='reslutImg' src={result1} alt="" />
                              </div>
                              <div className="row overflow-hidden">
                                    <img className='reslutImg' src={result3} alt="" />
                              </div>
                        </div>

                        <div className='col-12 col-md-4 g-0 overflow-hidden'>
                              <img className='reslutImg' src={result2} alt="" />
                        </div>

                        <div className='col-12 col-md-4 g-0'>
                              <div className="row overflow-hidden">
                                    <img className='reslutImg' src={result4} alt="" />
                              </div>
                              <div className="row overflow-hidden">
                                    <img className='reslutImg' src={result5} alt="" />
                              </div>
                        </div>
                  </div>
            </div>      
      );
};

export default Results;