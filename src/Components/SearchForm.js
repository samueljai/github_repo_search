import React, { Component } from 'react';
import '../CSS/SearchForm.css'

class SearchForm extends Component {
  state = {
    searchValue: "",
  }

  render() {
    const { searchValue } = this.state;

    return (
      <form className="repoSearch" onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={searchValue} onChange={this.handleChange} placeholder="Enter repo name here..." />
        </label>
        <div className="buttonGroup">
          <button type="submit" value="Submit">Search</button>
          <button onClick={this.reset} >Clear</button>
        </div>
      </form>
    );
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({ searchValue: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchValue } = this.state;
    const { getSearchValue } = this.props;
    // call the function to pass data back to app
    getSearchValue(searchValue);
    // reset form
    this.setState({ searchValue: "" })
  }

  reset = () => {
    // reset form
    this.setState({ searchValue: "" })
  }
}

export default SearchForm;