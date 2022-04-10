import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import GoogleSignInButton from "../components/Auth/GoogleSignInButton";

export default function SignUp({ signUp }) {
  return (
    <Container sx={{ display: "flex", flexFlow: "column wrap", width: "75%" }}>
      <AuthForm signUp={true} />
      <Typography>Or</Typography>
      <GoogleSignInButton />
    </Container>
  );
}
