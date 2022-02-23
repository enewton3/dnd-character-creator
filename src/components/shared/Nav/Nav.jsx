import { useTheme } from "@emotion/react";
import AppBar from "@mui/material/AppBar";

import Logo from "../Logo";
import NavLinks from "./NavLinks";

export default function Nav() {
  const theme = useTheme();

  return (
    <AppBar
      color="primary"
      position="static"
      sx={{ backgroundColor: theme.primary }}
    >
      <Logo />
      <NavLinks />
    </AppBar>
  );
}
