import React, { Component } from 'react';
import './App.scss';
import DigitalMarketplace from './mainSectionFolder/DigitalMarketplace/DigitalMarketplace';
import Advantages from 'components/App/mainSectionFolder/Advantages';
import TopCollections from 'components/App/mainSectionFolder/TopCollections';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <main>
          <DigitalMarketplace />
          <Advantages />
          <TopCollections />
        </main>
      </>
    );
  }
}

export default App;
