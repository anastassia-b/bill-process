import React from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="leftnav-container">
        <div className="links">
          <Link to={`/dashboard`}>
            <h2>Dashboard</h2>
          </Link>
        </div>

        <div className="links">
          <Link to={`/dashboard`}>
            <h2>Bills</h2>
          </Link>
        </div>

        <div className="links">
          <Link to={`/customers`}>
            <h2>Customers</h2>
          </Link>

          <ul>
            <li>Customer1</li>
            <li>Customer2</li>
            <li>Customer3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftNav;
