import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <Button color="inherit">DnD Character Creator</Button>
    </Link>
  );
}
