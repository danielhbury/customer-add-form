import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state={
      firstName: '',
      lastName: '',
      email: '',
      customers: [],
      successFulAddMessage: '',
    }
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputUpdate(key, value) {
    this.setState({
      [key]: value,
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { customers, firstName, lastName, email } = this.state;

    customers.push({ firstName, lastName, email });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      customers,
      successFulAddMessage: `${firstName} ${lastName} was successfully added.`
    })
  }

  render() {
    const { customers, firstName, lastName, email, successFulAddMessage } = this.state;

    const customerList = customers.length ? customers.map((e) => {
      return (
        <div className="customer">
          <h5>First Name:</h5><p>{e.firstName}</p>
          <h5>Last Name:</h5><p>{e.lastName}</p>
          <h5>Email:</h5><p>{e.email}</p>
        </div>
      )
    }) : null;
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <h3>Customer Add Form</h3>
          <div className="form-element-container">
            <h4>First Name:</h4>
            <input name="first-name" type="text" onChange={(e) => this.handleInputUpdate('firstName', e.target.value)}value={firstName} />
          </div>
          <div className="form-element-container">
            <h4>Last Name:</h4>
            <input name="last-name" type="text" onChange={(e) => this.handleInputUpdate('lastName', e.target.value)}value={lastName} />
          </div>
          <div className="form-element-container">
            <h4>Email:</h4>
            <input name="email" type="text" onChange={(e) => this.handleInputUpdate('email', e.target.value)}value={email} />
          </div>
          <button type="submit">Add Customer</button>
        </form>
        <p>{successFulAddMessage}</p>
        <div className="customer-list-container">
          <h3>Customer List</h3>
          {customerList}
        </div>
      </div>
    );
  }
}

export default App;
