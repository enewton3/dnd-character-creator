import { Button, Input } from "@mui/material";
import React from "react";

export default function SignInForm() {
  return (
    <form>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button>Sign In</Button>
    </form>
  );
}
