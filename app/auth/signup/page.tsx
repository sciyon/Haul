"use client";

import { Link, Button, TextField, Stack } from "@mui/material"
import NextLink from "next/link"
import createUser from "./create-user";
import { useActionState } from "react";

const Signup = () => {
  const [state, formAction] = useActionState(createUser, { error: "" });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField 
          name="email" 
          label="Email" 
          type="email" 
          variant="outlined" 
          helperText={state.error} 
          error={!!state.error}/>
        <TextField 
          name="password" 
          label="Password" 
          type="password" 
          variant="outlined" 
          helperText={state.error} 
          error={!!state.error}/>
        <Button type="submit" variant="contained">Signup</Button>
        <Link component={NextLink} href="/auth/login" className="self-center"> Login</Link>
      </Stack>
    </form>
  )
}

export default Signup