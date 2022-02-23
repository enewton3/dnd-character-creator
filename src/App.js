import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import "./App.css";
import Layout from "./components/shared/Layout";
import { lightMuiTheme, darkMuiTheme } from "./styles";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <div className="App">
      {/* <ThemeProvider theme={{ lightMuiTheme }}> */}
      <Layout></Layout>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
