import React, { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Blog from "./component/Blog";
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
import Cookies from "./component/Cookies";

const LazyAbout = lazy(() => import("./component/About"));
const LazyContact = lazy(() => import("./component/Contact"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Suspense fallback="Loading...">
              <LazyContact />
            </React.Suspense>
          }
        />
        <Route path="/blog" element={<Blog />} />
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
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
