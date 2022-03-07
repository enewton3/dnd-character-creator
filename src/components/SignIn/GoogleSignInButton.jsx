import { Button } from "@mui/material";
import React from "react";
import { auth, googleAuthProvider } from "../../services/firebase";

export default function GoogleSignInButton() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return <Button>Sign In with Google</Button>;
}
