import React, { Component } from 'react';
import '../CSS/Results.css'
import * as api from '../Utils/api';
import ErrorPage from './ErrorPage';
import Result from './Result';

class Results extends Component {
  state = {
    loading: true,
    resultItems: [],
    err: ""
  }

  render() {
    const { resultItems, loading, err } = this.state

    if (err) return <ErrorPage err={err} />
    if (loading) return (<h3 className="loading">Loading...</h3>);

    if (!resultItems.length) return (
      <ul className="repoResults">
        <li className="resultsCard">
          <h3>No results found...Search again!</h3>
        </li>
      </ul>
    )
    return (
      <ul className="repoResults">
        {resultItems.map(result => <Result result={result} />)}
      </ul>
    );
  }

  componentDidMount() {
    const { searchValue } = this.props;
    this.getGitHubResults(searchValue);
  }

  componentDidUpdate(prevProps, prevState) {
    const valuleUpdated = prevProps.searchValue !== this.props.searchValue;
    if (valuleUpdated) {
      this.setState({ loading: true }, () => this.getGitHubResults(this.props.searchValue))
    }
  }

  getGitHubResults(searchValue) {
    api.getRepoResults(searchValue)
      .then(items => {
        this.setState({ resultItems: items, loading: false })
      })
      .catch(err => {
        this.setState({ err: err })
      })
  }
}

export default Results;