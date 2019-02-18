import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <main>
          <div className="repoSearch">Search Bar</div>
          <div className="repoMain">
            <div className="repoReadMe">ReadMe</div>
            <div className="repoInfo">Info</div>
          </div>
        </main>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;
