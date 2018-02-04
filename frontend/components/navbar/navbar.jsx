import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="navbar-container">
        <div className="nav-left">
        </div>
        <div className="nav-right">
          <p>Welcome, {this.props.currentUser.name}</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
