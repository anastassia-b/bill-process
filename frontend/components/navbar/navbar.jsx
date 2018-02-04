import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="navbar-container">
        <button onClick={this.props.logout}>Logout!</button>
      </div>
    );
  }
}

export default NavBar;
