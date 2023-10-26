// import React, { lazy } from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
// import Blog from "./component/Blog";
// // import Navbar from "./component/NavBar";
// import NoMatch from "./component/NoMatch";
// import Product from "./component/Product";
// import FeaturedProduct from "./component/FeaturedProduct";
// import NewProduct from "./component/NewProduct";
// import User from "./component/User";
// import UserDetail from "./component/UserDetail";
// import Amin from "./component/Amin";
// import Profile from "./component/Profile";
// import { AuthProvider } from "./component/Auth";
// import Login from "./component/Login";
// import { RequireAuth } from "./component/RequireAuth";
// import Cookies from "./component/Cookies";
// import Sheet from "./component/Sheet";
// import Sheety from "./component/Sheety";
// import Sheetapi from "./component/Sheetapi";
// import DataForm from "./component/DataForm";
// import Upload from "./component/Upload";
// import Sidebar from "./Layouts/Sidebar";
// import Navbar from "./Layouts/Navbar";
// import { Container } from "react-bootstrap";

// const LazyAbout = lazy(() => import("./component/About"));
// const LazyContact = lazy(() => import("./component/Contact"));

// function App() {
//   return (
//     <AuthProvider>
//       <div className="d-flex">
//         <Sidebar />
//         <div className="flex-grow-1">
//           <Navbar />
//           <Container>
//            <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/about"
//               element={
//                 <React.Suspense fallback="Loading...">
//                   <LazyAbout />
//                 </React.Suspense>
//               }
//             />
//             <Route
//               path="/contact"
//               element={
//                 <React.Suspense fallback="Loading...">
//                   <LazyContact />
//                 </React.Suspense>
//               }
//             />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/product" element={<Product />}>
//               <Route index element={<FeaturedProduct />} />
//               <Route path="featured" element={<FeaturedProduct />} />
//               <Route path="new" element={<NewProduct />} />
//             </Route>
//             <Route path="user" element={<User />}>
//               <Route path=":userId" element={<UserDetail />} />
//               <Route path="admin" element={<Amin />} />
//             </Route>
//             <Route
//               path="/profile"
//               element={
//                 <RequireAuth>
//                   {" "}
//                   <Profile />
//                 </RequireAuth>
//               }
//             />
//             <Route path="/login" element={<Login />} />
//             <Route path="/cookies" element={<Cookies />} />
//             <Route path="/sheet" element={<Sheet />} />
//             <Route path="/sheety" element={<Sheety />} />
//             <Route path="/sheetapi" element={<Sheetapi />} />
//             <Route path="/dataform" element={<DataForm />} />
//             <Route path="/upload" element={<Upload />} />
//             <Route path="*" element={<NoMatch />} />
//           </Routes>
//           </Container>
//         </div>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
