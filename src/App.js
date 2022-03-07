import { ThemeProvider } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import CharacterCreate from "./screens/CharacterCreate";
import Home from "./screens/Home";
import MyCharacters from "./screens/MyCharacters";
import NotFound from "./screens/NotFound";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { lightMuiTheme } from "./styles";

function App({ children }) {
  return (
    <div className="App">
      <ThemeProvider theme={lightMuiTheme}>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/character-create" element={<CharacterCreate />} />
            <Route path="/my-characters" element={<MyCharacters />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
