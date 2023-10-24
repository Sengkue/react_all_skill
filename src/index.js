import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { initializeApp } from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBLzrvcnjKqHakImJr84l184f3tYUKbEHI",
  authDomain: "xeebkwmvaj-3e3ec.firebaseapp.com",
  databaseURL: "https://xeebkwmvaj-3e3ec-default-rtdb.firebaseio.com",
  projectId: "xeebkwmvaj-3e3ec",
  storageBucket: "xeebkwmvaj-3e3ec.appspot.com",
  messagingSenderId: "954566103482",
  appId: "1:954566103482:web:246f62f51c53d0ea47cd83",
  measurementId: "G-11XXTES6XB"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
      {/* <OAuthExample /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
