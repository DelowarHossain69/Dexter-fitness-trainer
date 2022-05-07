import React from 'react';
import AboutTrainer from './AboutTrainer/AboutTrainer';
import Contact from './Contact/Contact';
import Motivation from './Motivation/Motivation';
import Results from './Results/Results';
import Reviews from './Reviews/Reviews';
import Slider from './Slider/Slider';

const Home = () => {
      // updated
      return (
            <div>
                  <Slider></Slider>
                  <AboutTrainer></AboutTrainer>
                  <Results></Results>
                  <Motivation></Motivation>
                  <Reviews></Reviews>
                  <Contact></Contact>
            </div>
      );
};

export default Home;