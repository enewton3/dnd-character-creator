import { Button } from "@mui/material";
import React from "react";
import { auth, googleAuthProvider } from "../../services/firebase";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

export default function GoogleSignInButton() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      toast(`Hello ${result.user.displayName}!`, { icon: "👋" });
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="outlined" onClick={signInWithGoogle}>
      <GoogleIcon sx={{ fontSize: 35, paddingRight: 2 }} /> Sign In with Google
    </Button>
  );
}
