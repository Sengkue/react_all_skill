import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieViewer = () => {
  const [cookieValue, setCookieValue] = useState(null);
  const [cookieName, setCookieName] = useState("");
  const [cookieValueInput, setCookieValueInput] = useState("");

  // Function to get all cookies
  const getAllCookies = () => {
    const cookies = Cookies.get();
    setCookieValue(JSON.stringify(cookies, null, 2));
  };

  useEffect(() => {
    // Call the function when the component mounts
    getAllCookies();
  }, []);

  // Function to clear all cookies
  const clearCookies = () => {
    const cookies = Cookies.get();
    for (const cookieName in cookies) {
      Cookies.remove(cookieName);
    }
    setCookieValue(null); // Clear the state as well
  };

  // Function to set a new cookie based on user input
  const setNewCookie = () => {
    if (cookieName.trim() !== "" && cookieValueInput.trim() !== "") {    // The trim() method is a built-in JavaScript method that is used to remove whitespace characters (spaces, tabs, and line breaks) from the beginning and end of a string. Whitespace characters are non-printable characters that represent empty space in a text.
      Cookies.set(cookieName, cookieValueInput);
      getAllCookies(); // Refresh the cookie display
      setCookieName(""); // Clear the name input field
      setCookieValueInput(""); // Clear the value input field
    }
  };

  return (
    <div>
      <h1>Cookie Viewer</h1>
      <div>
        <p>The values of all cookies are:</p>
        {cookieValue ? (
          <pre>{cookieValue}</pre>
        ) : (
          <p>No cookies found or they have no values.</p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Cookie Name"
          value={cookieName}
          onChange={(e) => setCookieName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cookie Value"
          value={cookieValueInput}
          onChange={(e) => setCookieValueInput(e.target.value)}
        />
        <button onClick={setNewCookie}>Set Cookie</button>
      </div>
      <div>
        <button onClick={clearCookies}>Clear Cookies</button>
      </div>
    </div>
  );
};

export default CookieViewer;
