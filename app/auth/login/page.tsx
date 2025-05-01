"use client"

import { Button, Link, Stack, TextField } from "@mui/material"
import NextLink from "next/link"
import { useActionState } from "react"
import login from "./login"

const Login = () => {
  const [state, formAction] = useActionState(login, { error: "" })
  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField 
          error={!!state.error}
          helperText={state.error}
          name="email" 
          label="Email" 
          type="email" 
          variant="outlined" 
        />
        <TextField 
          error={!!state.error}
          helperText={state.error} 
          name="password" 
          label="Password" 
          type="password" 
          variant="outlined" 
        />
        <Button type='submit' variant="contained">
          Login
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center">Signup</Link>
      </Stack>
    </form>
  )
}

export default Login