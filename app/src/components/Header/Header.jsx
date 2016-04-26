import {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-header">
          <a className="navbar-brand" href="/">Marvel Heroes</a>
        </div>
      </nav>
    );
  }
}
