import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="nav-left">
        </div>
        <div className="nav-right">
          <p>{this.props.currentUser.name} - {this.props.currentUser.role}</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
