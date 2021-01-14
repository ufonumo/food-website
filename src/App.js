import Navbar from './components/navbar'
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import { SlideData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import React, {useState, useRef, useEffect} from 'react';
import InfoSession from './components/InfoSession';
import { InfoData } from './data/InfoData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SlideData}/>
      <InfoSession {...InfoData}/>
    </div>
  );
}

export default App;
