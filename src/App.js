import React, { Component } from 'react';

import './App.css';

import Form from './components/form/Form';

import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Form</h1>
        <Form />
      </Container>
    );
  }
}

export default App;
