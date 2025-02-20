import { useState, ChangeEvent } from "react";
import BasePage from "./BasePage";
import { TextField, Box, Button } from "@mui/material";
import useUsers, { type UserDocumentType } from '../hooks/useUsers';
import useAuth from '../hooks/useAuth';

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  auth_id: string;
}

export default function SignUp() {
  const [user, setUser] = useState<UserType>({ firstName: '', lastName: '', email: '', password: '', auth_id: '' });
  const { addUser } = useUsers();
  const { signUp } = useAuth();

  const onTextFieldChange = (field: keyof UserType, e: ChangeEvent<HTMLInputElement>) => {
    const newState = { ...user } as UserType
    newState[field] = e.target.value
    setUser(newState)
  }

  const addNewUser = async () => {
    console.log('addNewUser')
    await signUp(user)
  }

  return (
    <BasePage>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-basic" label="First Name" variant="outlined" value={user.firstName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('firstName', event)}
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" value={user.lastName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('lastName', event)}
          />
        </div>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={user.email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('email', event)}
          />
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" value={user.password}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('password', event)}
          />
        </div>
        <div>
          <Button variant="contained" onClick={addNewUser}>Sign Up</Button>
        </div>
      </Box>
    </BasePage>
  )
}