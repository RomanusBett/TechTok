import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
