import React, { useContext, useState } from "react";
import Logo from "../Logo";
import { LoggedOutLinks } from "./NavLinks";
import UserMenu from "./UserMenu";
import { UserContext } from "../../../services/UserContext";
import { Avatar, Typography, AppBar, Toolbar } from "@mui/material";

export default function Nav() {
  const { user } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      position="sticky"
    >
      <Logo />
      <Toolbar sx={{ display: "flex", flexFlow: "row wrap" }}>
        {user ? (
          <div
            id="user-avatar"
            onClick={(e) => handleOpen(e)}
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Typography>{user.displayName}</Typography>
            <Avatar alt={`${user.displayName}`}>{user.displayName[0]}</Avatar>
          </div>
        ) : (
          <LoggedOutLinks />
        )}
        <UserMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );

  // );
}
