import { Button, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../services/firebase";

export default function AuthForm(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const signUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      toast(`Hello ${result.user.displayName}!`, { icon: "👋" });
      nav("/", { replace: true });
    } catch (e) {
      console.log(e);
      toast(e);
    }
  };

  const signIn = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      toast(`Hello ${result.user.displayName}!`, { icon: "👋" });
      nav("/", { replace: true });
    } catch (e) {
      console.log(e);
      toast(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.signIn) signIn();
    if (props.signUp) signUp();
  };

  return (
    <form>
      {props.signUp && (
        <TextField
          label="Display Name"
          name="displayName"
          onChange={(e) => handleChange(e)}
        />
      )}
      <TextField
        type="email"
        label="Email"
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        onChange={(e) => handleChange(e)}
      />
      <Button type="submit" variant="outlined" onClick={(e) => handleSubmit(e)}>
        Submit and Sign In
      </Button>
    </form>
  );
}
