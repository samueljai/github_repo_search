import React from 'react';

const ErrorPage = (err) => {
  return (
    <ul className="repoResults">
      <li className="resultsCard">
        <h2>ERROR!</h2>
        {!err && <h3>Oops!! Nothing to see here...sorry we couldn't find that page!</h3>}
        <h3>{err}</h3>
      </li>
    </ul>
  );
};

export default ErrorPage;