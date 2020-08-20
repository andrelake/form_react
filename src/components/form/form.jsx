import React, { useState } from 'react';

import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function Form({ handleSubmitForm, handleValidateCpf }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [newsletter, setNewsletter] = useState(true);

  const [errors, setErrors] = useState({ cpf: { valid: true, text: '' } });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm({ firstName, lastName, cpf, newsletter });
      }}
    >
      <TextField
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        type="text"
        id="firstname"
        label="First Name"
        variant="standard"
        size="small"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        type="text"
        id="lastname"
        label="Last Name"
        variant="standard"
        size="small"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={(e) => {
          const isValid = handleValidateCpf(cpf);
          setErrors({
            cpf: isValid,
          });
        }}
        error={!errors.cpf.valido}
        helperText={errors.cpf.text}
        type="text"
        id="cpf"
        label="CPF"
        variant="standard"
        size="small"
        margin="normal"
        fullWidth
      ></TextField>

      <FormControlLabel
        control={
          <Switch
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            type="checkbox"
            name="newsletter"
          ></Switch>
        }
        label="Newsletter"
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}
