import AppBar from "@mui/material/AppBar";
import Logo from "../Logo";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      position="sticky"
    >
      <Logo />
      <NavLinks />
    </AppBar>
  );

  // );
}
