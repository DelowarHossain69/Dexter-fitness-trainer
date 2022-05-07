import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart/ServiceCart';

const Services = () => {
           const [services, setServices] = useState([]);

      useEffect(()=> {
            fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
      }, []);
      
      return (
           <section className='container mx-auto py-5'>
                  <h2 className='section-title'>Our Services</h2>
                  <div className='row mt-5 g-4'>
                        {
                              services?.map(serviceInfo => <ServiceCart
                                    key={serviceInfo.id}
                                    serviceInfo = {serviceInfo}
                              ></ServiceCart>)
                        }
                  </div>
           </section>
      );
};

export default Services;