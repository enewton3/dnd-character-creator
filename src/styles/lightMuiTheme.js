import { deepOrange, grey, pink } from "@mui/material/colors";
import { createTheme } from "@mui/system";

const lightMuiTheme = createTheme({
  type: "light",
  palette: {
    mode: "light",
    primary: { main: deepOrange },
    secondary: { main: pink },
    // background: { default: grey },
  },
});

export default lightMuiTheme;
