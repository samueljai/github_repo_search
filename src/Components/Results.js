import React, { Component } from 'react';
import '../CSS/Results.css'
import * as api from '../Utils/api';
import ErrorPage from './ErrorPage';
import Result from './Result';

class Results extends Component {
  state = {
    loading: true,
    items: [],
    err: ""
  }

  render() {
    const { items, loading, err } = this.state

    if (err) return <ErrorPage err={err} />
    if (loading) return (<h3 className="loading">Loading...</h3>);

    if (!items.length) return (
      <ul className="repoResults">
        <li className="resultsCard">
          <h3>No results found...Search again!</h3>
        </li>
      </ul>
    )
    return (
      <ul className="repoResults">
        {items.map(result => <Result result={result} />)}
      </ul>
    );
  }

  componentDidMount() {
    const { value } = this.props;
    this.getGitHubResults(value);
  }

  componentDidUpdate(prevProps, prevState) {
    const valuleUpdated = prevProps.value !== this.props.value;
    if (valuleUpdated) {
      this.setState({ loading: true }, () => this.getGitHubResults(this.props.value))
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