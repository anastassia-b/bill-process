import React from 'react';

class Session extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props);
    return (
      <h2>Login/Signup!</h2>
    );
  }
}

export default Session;
