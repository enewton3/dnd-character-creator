import { Paper, Typography } from "@mui/material";
import GoogleSignInButton from "../components/Auth/GoogleSignInButton";
import React from "react";
import SignInForm from "../components/Auth/SignInForm";

export default function SignIn(props) {
  return (
    <Paper>
      <SignInForm />
      <Typography>Or</Typography>
      <GoogleSignInButton />
    </Paper>
  );
}
