import React from "react";
import { Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavLinks({ loggedIn, logOut }) {
  const loggedOutOptions = (
    <>
      <Link to="/sign-in">
        <Button color="inherit">Sign In</Button>
      </Link>
      <Link to="/sign-up">
        <Button color="inherit">Sign Up</Button>
      </Link>
    </>
  );

  const loggedInOptions = (
    <>
      <Link to="/my-characters">
        <Button color="inherit">My Characters</Button>
      </Link>
      <>
        <Button color="inherit">Sign Out</Button>
      </>
    </>
  );

  return (
    <Toolbar sx={{ display: "flex", flexFlow: "row wrap" }}>
      <Link to="/character-create">
        <Button color="inherit">Create New</Button>
      </Link>

      {loggedIn ? loggedInOptions : loggedOutOptions}
    </Toolbar>
  );
}
