import { Paper, Typography } from "@mui/material";
import GoogleSignInButton from "../components/Auth/GoogleSignInButton";
import React from "react";
import AuthForm from "../components/Auth/AuthForm";

export default function SignIn(props) {
  return (
    <Paper>
      <AuthForm signIn={true} />
      <Typography>Or</Typography>
      <GoogleSignInButton />
    </Paper>
  );
}
