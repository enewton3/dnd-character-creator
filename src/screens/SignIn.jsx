import { Paper, Typography } from "@mui/material";
import GoogleSignInButton from "../components/SignIn/GoogleSignInButton";
import React from "react";
import SignInForm from "../components/SignIn/SignInForm";

export default function SignIn(props) {
  const user = null;
  const username = null;

  return (
    <Paper>
      <SignInForm />
      <Typography>Or</Typography>
      <GoogleSignInButton />
    </Paper>
  );
}
