import React from 'react';
import dayjs from 'dayjs';

const Result = (result) => {
  return (
    <li className="resultsCard" key={result.result.id} >
      <h3>{result.result.name} by {result.result.owner.login}</h3>
      <div className="resultBox">
        <img className="avatar" src={result.result.owner.avatar_url} alt={`${result.result.owner.login}'s avatar`} />
        <div className="resultData">
          <p>Description: {result.result.description}</p>
          <p>Created: {dayjs(result.result.created_at).format('DD/MM/YYYY')}</p>
          <p>Open Issues: {result.result.open_issues}</p>
          <p>Total Forks: {result.result.forks}</p>
          <p>Last Updated: {dayjs(result.result.updated_at).format('DD/MM/YYYY')}</p>
        </div>
      </div>
      <a href={result.result.html_url} rel="noopener noreferrer" target="_blank">View Repo</a>
    </li>
  );
};

export default Result;