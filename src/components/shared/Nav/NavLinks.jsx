import { Button, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";

export const LoggedInLinks = ({ handleClose }) => (
  <>
    <MenuItem onClick={handleClose}>
      <Link to="/character-create">Create New</Link>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <Link to="/my-characters">My Characters</Link>
    </MenuItem>
    <MenuItem
      color="inherit"
      onClick={() => {
        signOut(auth);
        handleClose();
      }}
    >
      Sign Out
    </MenuItem>
  </>
);

export const LoggedOutLinks = () => (
  <>
    <Link to="/character-create">
      <Button color="inherit">Create New</Button>
    </Link>
    <Link to="/sign-in">
      <Button color="inherit">Sign In</Button>
    </Link>
    <Link to="/sign-up">
      <Button color="inherit">Sign Up</Button>
    </Link>
  </>
);
