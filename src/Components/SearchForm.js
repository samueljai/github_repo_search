import React, { Component } from 'react';
import '../CSS/SearchForm.css'

class SearchForm extends Component {
  state = {
    value: "",
  }

  render() {
    const { value } = this.state;

    return (
      <form className="repoSearch" onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={value} onChange={this.handleChange} placeholder="Enter repo name here..." />
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
    this.setState({ value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const { getSearchValue } = this.props;
    // call the function to pass data back to app
    getSearchValue(value);
    // reset form
    this.setState({ value: "" })
  }

  reset = () => {
    // reset form
    this.setState({ value: "" })
  }
}

export default SearchForm;