import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import lightMuiTheme from "./styles/lightMuiTheme";
import "./App.css";
import Layout from "./components/shared/Layout";
import { Route, Routes, useHistory } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { deepOrange, pink } from "@mui/material/colors";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/">Home Page</Route>
          <Route path="/character-create">Character Creation Page</Route>
          <Route path="/my-characters">My Characters</Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
