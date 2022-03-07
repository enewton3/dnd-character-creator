import { ThemeProvider } from "@mui/styles";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import CharacterCreate from "./screens/CharacterCreate";
import Home from "./screens/Home";
import MyCharacters from "./screens/MyCharacters";
import NotFound from "./screens/NotFound";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { useUserData } from "./services/hooks";
import { UserContext } from "./services/UserContext";
import { lightMuiTheme } from "./styles";

function App() {
  const userData = useUserData();
  return (
    <div className="App">
      <ThemeProvider theme={lightMuiTheme}>
        <UserContext.Provider value={userData}>
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
          <Toaster position="bottom-right" reverseOrder={false} />
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
