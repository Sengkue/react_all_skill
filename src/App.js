import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
// import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Navbar from "./component/NavBar";
import NoMatch from "./component/NoMatch";
import Product from "./component/Product";
import FeaturedProduct from "./component/FeaturedProduct";
import NewProduct from "./component/NewProduct";
import User from "./component/User";
import UserDetail from "./component/UserDetail";
import Amin from "./component/Amin";
import Profile from "./component/Profile";
import { AuthProvider } from "./component/Auth";
import Login from "./component/Login";
import { RequireAuth } from "./component/RequireAuth";
const LazyAbout = React.lazy(() => import("./component/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="user" element={<User />}>
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Amin />} />
        </Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              {" "}
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
