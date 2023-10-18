import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <div>Contact</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default Contact;
