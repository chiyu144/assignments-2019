import React, { Component } from 'react';
import WelMsg from './WelMsg';
import Navs from './Navs';
import Show from './Show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navs />
        <WelMsg />
        <Show />
        <footer className="bigFooter">
            <p>&copy; Julie Liao 2019</p>
        </footer>
    </div>
    );
  }
}

export default App;
