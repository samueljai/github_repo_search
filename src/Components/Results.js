import React, { Component } from 'react';
import '../CSS/Results.css'

class Results extends Component {

  render() {
    const { value } = this.props
    return (
      <div className="repoResults">
        {value ? <h3>Results Here</h3> : <h3>Search for a Repository Name above</h3>}
      </div>
    );
  }
}

export default Results;