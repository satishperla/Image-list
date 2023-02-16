import React, { Component } from "react";

export default class SearchInput extends Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  state = { entry: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
    // console.log(this.state.entry);
  };

  // onInputChange(event){
  //     console.log(event.target.value)
  // }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Search..."
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
