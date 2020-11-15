import Contacts from "./Contacts.js";

import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    companies: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/phones/mobiles.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log);

    fetch('http://localhost:3001/phones/companies.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ companies: data })
      })
      .catch(console.log);
  }

  render() {
    return (
    <Contacts contacts={this.state.contacts} companies={this.state.companies}/>
    )
  };

};

export default App;
