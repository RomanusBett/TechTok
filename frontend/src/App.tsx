import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profilePage";
import BlogDetails from "./pages/blogDetails";
import PrivateRoute from "./components/privateRoute";
import { useUser } from "./components/store/UserContext";

function App() {
  const {user, loading} = useUser();
  if (loading) return <p>Loading...</p>

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={
            <PrivateRoute isAuthenticated={!!user}>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute isAuthenticated={!!user}>
              <ProfilePage />
            </PrivateRoute>
          } />
          <Route path="/:id/blog" element={
            <PrivateRoute isAuthenticated={!!user}>
              <BlogDetails />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
