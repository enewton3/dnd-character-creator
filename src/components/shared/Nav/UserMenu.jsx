import React from "react";
import { Menu } from "@mui/material";
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
