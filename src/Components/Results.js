import React, { Component } from 'react';
import '../CSS/Results.css'
import * as api from '../Utils/api';
import dayjs from 'dayjs';
import ErrorPage from './ErrorPage';

class Results extends Component {
  state = {
    loading: true,
    items: [],
    err: ""
  }

  render() {
    const { items, loading, err } = this.state

    //To-Do:
    // add loading spinner
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
        {items.map(result => {
          return (
            <li className="resultsCard" key={result.id} >
              <h3>{result.name} by {result.owner.login}</h3>
              <div className="resultBox">
                <img className="avatar" src={result.owner.avatar_url} alt={`${result.owner.login}'s avatar`} />
                <div className="resultData">
                  <p>Description: {result.description}</p>
                  <p>Created: {dayjs(result.created_at).format('DD/MM/YYYY')}</p>
                  <p>Open Issues: {result.open_issues}</p>
                  <p>Total Forks: {result.forks}</p>
                  <p>Last Updated: {dayjs(result.updated_at).format('DD/MM/YYYY')}</p>
                </div>
              </div>
              <a href={result.html_url} rel="noopener noreferrer" target="_blank">View Repo</a>
            </li>
          )
        })}
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