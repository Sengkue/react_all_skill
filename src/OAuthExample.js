import React from "react";
import { GoogleLogin } from "react-google-login";
const MyComponent = () => {
  const responseGoogle = (response) => {
    if (response.profileObj) {
      const idToken = response.getAuthResponse().id_token;
      // Use idToken to make authenticated requests to Google Sheets API
      console.log(idToken);
    }
  };

  return (
    <div>
      <h1>OAuth Example</h1>
      <GoogleLogin
        clientId="490861495414-4mqiquitn0hrve83pgpot8knurmi843g.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default MyComponent;
