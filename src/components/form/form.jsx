import React from 'react';

import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function Form() {
  return (
    <form>
      <TextField
        type="text"
        id="firstname"
        label="First Name"
        variant="standard"
        size="small"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        type="text"
        id="lastname"
        label="Last Name"
        variant="standard"
        size="small"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
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
          <Switch type="checkbox" name="newsletter" defaultChecked></Switch>
        }
        label="Newsletter"
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}
