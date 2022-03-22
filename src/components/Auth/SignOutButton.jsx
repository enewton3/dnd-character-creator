import { MenuItem } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../services/firebase";

export default function SignOutButton({ handleClose }) {
  return (
    <MenuItem
      color="inherit"
      onClick={() => {
        signOut(auth);
        handleClose();
      }}
    >
      Sign Out
    </MenuItem>
  );
}
