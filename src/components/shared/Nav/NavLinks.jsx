import React from "react";
import { Button, Toolbar, Link } from "@mui/material";

export default function NavLinks({ loggedIn, logOut }) {
  const loggedOutOptions = (
    <>
      {/* <Link sx={{ color: "white" }} component="button" href="/sign-in"> */}
      <Button color="inherit">Sign In</Button>
      {/* </Link> */}
      {/* <Link component="button" href="/sign-up"> */}
      <Button color="inherit">Sign Up</Button>
      {/* </Link> */}
    </>
  );

  const loggedInOptions = (
    <>
      {/* <Link component="button" href="/my-characters"> */}
      <Button color="inherit">My Characters</Button>
      {/* </Link> */}
      <>
        <Button color="inherit">Sign Out</Button>
      </>
    </>
  );

  return (
    <Toolbar sx={{ display: "flex", flexFlow: "row wrap" }}>
      {/* <Link component="button" href="/character-create"> */}
      <Button color="inherit">Create New</Button>
      {/* </Link> */}
      {loggedIn ? loggedInOptions : loggedOutOptions}
    </Toolbar>
  );
}
