import React, { FC } from 'react';
import About from './components/myTypescriptFolder/About';
import Contact from './components/myTypescriptFolder/Contact';
import Home from './components/myTypescriptFolder/Home';
import Image from './components/myTypescriptFolder/Image';

import { NavBar } from './components/myTypescriptFolder/NavBar';
import Skills from './components/myTypescriptFolder/Skills';
import Work from './components/myTypescriptFolder/Work';

const App :FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Image/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
