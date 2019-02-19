import React, { Component } from 'react';
import '../CSS/Results.css'

class Results extends Component {
  render() {
    return (
      <div className="repoMain">
        <div className="repoReadMe">ReadMe</div>
        <div className="repoInfo">Info</div>
      </div>
    );
  }
}

export default Results;