// File: App.js

import React from 'react';
import './styles.css';
import EventPage from './component/event';
import Scroll from './component/carousel';
import About from './component/About';
import Temple from './component/Temple';

import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <EventPage />
      <Scroll />
      <About />
      <Temple />
     
      <Footer />
    </div>
  );
};

export default App;

