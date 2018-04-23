import React from 'react';
import Login from './login';
import Signup from './signup';

class Session extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="welcome">
        <div className="session-container">
          <h1>Welcome to BillProcess</h1>
          <div className="session">
            <Login login={this.props.login} />
            <Signup signup={this.props.signup} />
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
