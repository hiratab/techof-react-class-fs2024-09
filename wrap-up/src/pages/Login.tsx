import { useState } from "react";
import BasePage from "./BasePage";
import { TextField, Box, Button } from "@mui/material";

interface CredentialType {
  email: string;
  password: string;
}

export default function Login() {
  const [credential, setCredential] = useState<CredentialType>({ email: '', password: '' });

  return (
    <BasePage>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div>
          <Button variant="contained">Login</Button>
        </div>
      </Box>
    </BasePage>
  )
}