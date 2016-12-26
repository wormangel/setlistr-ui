import React, {Component} from 'react';
import NavBar from '../NavBar';

class MemberArea extends Component {

  render() {
    var user = { id: 1, isAdmin: false, userName: "lucas" };
    return (
      <div>
        <NavBar user={user}/>
        {this.props.children}
      </div>
    );
  }
}

export default MemberArea;
