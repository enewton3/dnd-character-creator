import { Menu, MenuItem } from "@mui/material";
import React from "react";
import SignOutButton from "../../Auth/SignOutButton";
import { LoggedInLinks } from "./NavLinks";

export default function UserMenu({ handleClose, open, anchorEl }) {
  return (
    <Menu
      id="user-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "user-avatar",
      }}
    >
      <LoggedInLinks handleClose={handleClose} />
    </Menu>
  );
}
