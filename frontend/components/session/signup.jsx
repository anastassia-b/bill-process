import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      role: ''
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
    this.props.signup(this.state);
    this.setState({name: '', password: '', role: ''});
  }

  render() {
    return (
      <div className="signup">
        <h2>Signup</h2>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')} />
          <label>Role</label>
            <select value={this.state.role} onChange={this.update('role')}>
              <option value=""></option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="CustomerSuccess">Customer Success</option>
            </select>
          <label>Password</label>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')} />
          <button>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
