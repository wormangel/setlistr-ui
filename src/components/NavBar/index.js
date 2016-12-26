import React, {Component} from 'react';
import {Link} from 'react-router';

class NavBar extends Component {

  render() {
    const user = this.props.user;
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" id="setlistr-top-bar">
          <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                
                <Link to="/" className="navbar-brand">Setlistr</Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>

                  <li>
                    <Link to={`/users/${user.id}`}>Overview</Link>
                  </li>

                  <li>
                    <Link to={`/users/${user.id}/edit`}>Account</Link>
                  </li>

                  {user.isAdmin &&
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                  }
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li className="hidden-xs">
                    <p className="navbar-text">Hi, {user.name}</p>
                    <img alt="Profile" src="http://placehold.it/50x50" className="profile_pic"/>
                  </li>
                  <li>
                    <Link to="/logout" id="logout_btn">
                      Logout
                      <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
