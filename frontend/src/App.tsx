import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profilePage";
import BlogDetails from "./pages/blogDetails";
import PrivateRoute from "./components/privateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/checkauth", {
          withCredentials: true, headers: {
            'Content-Type': 'application/json'
          }
        });
        if (res.data.loggedIn) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProfilePage />
            </PrivateRoute>
          } />
          <Route path="/blog/:id" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <BlogDetails />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
