import React from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

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
          <Link to={`/customers`}><h2>Customers</h2></Link>

          <ul>
            <li><Link to={`/customers/32`}>Customer1</Link></li>
            <li><Link to={`/customers/33`}>Customer2</Link></li>
            <li><Link to={`/customers/34`}>Customer3</Link></li>
            <li><Link to={`/customers/35`}>Customer4</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftNav;
