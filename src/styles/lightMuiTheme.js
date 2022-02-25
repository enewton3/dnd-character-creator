import { createTheme } from "@mui/material/styles";

const lightMuiTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fb8c00",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Play",
  },
});

export default lightMuiTheme;
