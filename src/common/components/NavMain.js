import React from 'react';
import { Link } from 'react-router';
import { Tabs, Tab, Nav, NavItem, Navbar } from 'react-bootstrap';

const SIDE_LINKS = [
  { link: '/',
    page: 'home', 
    title: 'Home'
  },
  { link: '/listings',
    page: 'listings', 
    title: 'Listings'
  },
  {
    link: '/sellers',
    title: 'Sellers',
    page: 'sellers',
    disabled: false
  },
  {
    link: '/buyers',
    title: 'Buyers',
    page: 'buyers',
    disabled: false
  },
  {
    link: '/blocks',
    title: 'Blocks',
    page: 'blocks',
    disabled: false
  },
  { link: '/communications',
    page: 'communications', 
    title: 'Communications',
    disabled: true
  },
  { link: '/settings',
    page: 'settings', 
    title: 'Settings'
  },
  { link: '/help',
    page: 'help', 
    title: 'Help'
  }
];

const NavMain = React.createClass({
  propTypes: {
    activePage: React.PropTypes.string
  },

  render() {
    let brand = (
      <Link to="/" className="navbar-brand">
        <img src="/img/dropzone-logo-32x32.png" width="24" height="24" />
        Drop Zone
      </Link>
    );
    let sidebar = SIDE_LINKS.map(this.renderSideItem)
    let activeKey = SIDE_LINKS.findIndex( i => (i.page == this.props.activePage) )

    return (
      <div>
        <Navbar fluid componentClass="header" className="bs-docs-nav" role="banner">
          <Navbar.Header>
            {brand}
          </Navbar.Header>
          <Navbar.Collapse className="bs-navbar-collapse" >
            <Nav role="navigation" id="top" pullRight>
              <li key="login">
                <Link to='login'>Login</Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <Nav bsStyle="pills" stacked activeKey={activeKey}>
              {sidebar}
            </Nav>
          </div>
          <div className="col-sm-9 col-md-10 main">
          {this.props.children}
          </div>
        </div>
      </div>
    );
  },

  renderSideItem(link) {
    let eventKey = SIDE_LINKS.indexOf(link)

    return (
      <NavItem key={eventKey} eventKey={eventKey} href={link.link} disabled={link.disabled}>{link.title}</NavItem>
      );
  },

  renderTopItem(linkName) {
    let link = NAV_LINKS[linkName];

    return (
        <li className={this.props.activePage === linkName ? 'active' : null} key={linkName}>
          <Link to={link.link}>{link.title}</Link>
        </li>
      );
  }
});

export default NavMain;