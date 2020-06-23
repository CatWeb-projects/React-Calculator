import React from 'react';
import './App.scss';
import './styles.scss';
import Screen from './components/Screen/Screen';
import Buttons from './components/Buttons/Buttons';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="screen-wrapper">
            <Screen />
          </div>
          <div className="each-button">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
