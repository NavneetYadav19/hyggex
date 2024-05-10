import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import RelationsAndFunctions from './components/RelationsAndFunctions';
import Flashcard from './components/Flashcard';
import Publish from './components/Publish';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <RelationsAndFunctions />
      <Flashcard />
      <Publish />
      <FAQ />
    </div>
  );
};

export default App;
