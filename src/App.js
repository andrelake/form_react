import React, { Component } from 'react';

import './App.css';

import Form from './components/form/Form';

import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h2" align="center">
          Form
        </Typography>
        <Form
          handleSubmitForm={handleSubmitForm}
          handleValidateCpf={handleValidateCpf}
        />
      </Container>
    );
  }
}

function handleSubmitForm(data) {
  console.log(data);
}

function handleValidateCpf(cpf) {
  if (cpf.length !== 11) {
    return {
      valid: false,
      text: 'Cpf must have 11 digits.',
    };
  } else {
    return {
      valid: true,
      text: '',
    };
  }
}

export default App;
