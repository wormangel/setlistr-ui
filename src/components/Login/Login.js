import React from 'react';
import 'css-social-buttons/css/zocial.css';

class Login extends React.Component {
   render() {
      return (
        <div className="container">
          <div className="page-header">
            <h1>Setlistr</h1>
          </div>
          <div>
            <p className="lead">
              Manage your bands' setlists! Easily decide songs for concerts and store lyrics, tabs, audio and more to the songs!
            </p>
            <p>To begin, please login by using your Facebook or Spotify account</p>
            
            <div className="login-buttons-container">
              <p>
                <a href="#" id="fb_login_btn" className="zocial facebook">Login with Facebook</a>
              </p>
              <p>
                <a href="/auth/spotify" id="spotify_login_btn" className="zocial spotify">Login with Spotify</a>
              </p>
            </div>
          </div>
        </div>
      );
   }
}

export default Login;