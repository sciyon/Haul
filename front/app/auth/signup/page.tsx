import { Link, Button, TextField, Stack } from "@mui/material"
import NextLink from "next/link"

const Signup = () => {
  return (
    <div>
      
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" type="email" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained">Signup</Button>
      <Link component={NextLink} href="/auth/signup" className="self-center">Login</Link>
    </Stack>
    </div>
  )
}

export default Signup