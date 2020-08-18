import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

      <label>Newsletter</label>
      <input type="checkbox"></input>

      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}
