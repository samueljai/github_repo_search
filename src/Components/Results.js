import React, { Component } from 'react';
import '../CSS/Results.css'
import * as api from '../Utils/api';

class Results extends Component {
  state = {
    loading: true,
    items: [],
    err: ""
  }

  render() {
    const { items, loading, err } = this.state

    //To-Do:
    // change to error page
    // add loading spinner
    if (err) return (<p>err = {err}</p>)
    if (loading) return (<h3 className="loading">is loading...</h3>);

    return (
      <div className="repoResults">
        {items.map(result => {
          return (
            <div className="resultsCard">
              <p>{result.name}</p>
            </div>
          )
        })}
      </div>
    );
  }

  componentDidMount() {
    const { value } = this.props;
    this.getGitHubResults(value);
  }

  componentDidUpdate(prevProps, prevState) {
    const valuleUpdated = prevProps.value !== this.props.value;
    if (valuleUpdated) {
      this.getGitHubResults(this.props.value);
    }
  }

  getGitHubResults(value) {
    api.getRepoResults(value)
      .then(items => {
        this.setState({ items: items, loading: false })
      })
      .catch(err => {
        this.setState({ err: err })
      })
  }
}

export default Results;