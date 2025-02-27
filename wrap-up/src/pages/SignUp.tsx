import { useState, ChangeEvent } from "react";
import BasePage from "./BasePage";
import { TextField, Box, Button } from "@mui/material";
import useUsers, { type UserDocumentType } from '../hooks/useUsers';
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom"
import { Password } from "@mui/icons-material";

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  auth_id: string;
}

interface UserTypeWithErrors {
  firstName: {
    value: string;
    error: string;
  };
  lastName: {
    value: string;
    error: string;
  };
  email: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
  auth_id: {
    value: string;
    error: string;
  };
}

interface ValidationsType {
  firstName: (value: string) => string;
  lastName: (value: string) => string;
  email: (value: string) => string;
  password: (value: string) => string;
  auth_id: (value: string) => string;
}

export default function SignUp() {
  const [user, setUser] = useState<UserTypeWithErrors>({
    firstName: {
      value: '',
      error: ''
    },
    lastName: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    },
    auth_id: {
      value: '',
      error: ''
    }
  });
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const validations = {
    firstName: (value: string) => '',
    lastName: (value: string) => '',
    email: (value: string) => '',
    password: (value: string) => {
      if (value.length < 6) {
        return 'Password must be at least 6 characters long'
      }

      return ''
    },
    auth_id: (value: string) => ''
  } as ValidationsType

  const onTextFieldChange = (field: keyof UserTypeWithErrors, e: ChangeEvent<HTMLInputElement>) => {
    const newState = { ...user } as UserTypeWithErrors
    newState[field].value = e.target.value
    newState[field].error = validations[field](e.target.value)
    setUser(newState)
  }

  const addNewUser = async () => {
    console.log('addNewUser')
    await signUp({
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      email: user.email.value,
      password: user.password.value,
      auth_id: ''
    } as UserType)
    navigate('/')
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
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={user.firstName.value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('firstName', event)}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={user.lastName.value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('lastName', event)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={user.email.value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('email', event)}
          />
        </div>
        <div>
          <TextField
            error={user.password.error !== ''}
            id="outlined-basic"
            label={user.password.error != '' ? 'Password - Error' : 'Password'}
            variant="outlined"
            value={user.password.value}
            type={'password'}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onTextFieldChange('password', event)}
            helperText={(user.password.error != '' ? user.password.error : null)}
          />
        </div>
        <div>
          <Button variant="contained" onClick={addNewUser}>Sign Up</Button>
        </div>
      </Box>
    </BasePage>
  )
}