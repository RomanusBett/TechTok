import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
