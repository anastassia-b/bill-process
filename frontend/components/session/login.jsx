import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({name: '', password: ''});
  }

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')} />
          <label>Password</label>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')} />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
