import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import Inde from './../index/section1/index'
// import Contact from './../contact/index'
// import Work from './../work/index'
// import Serv from './../services/index'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md" className="nav">
            <div className="container">
              <Link className="navbar-brand" to="/">Logo</Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/contact">Contacto</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/serv/">Servicios</Link>
                  </NavItem>
                  {/* <NavItem>
                    <Link className="nav-link" to="/work">Trabajo</Link>
                  </NavItem> */}
                </Nav>
              </Collapse>
            </div>
          </Navbar>
          <Route exact path="/" component={ Inde }/>
          {/* <Route exact path="/contact" component={ Contact }/> */}
          {/* <Route exact path="/work" component={ Work }/> */}
          {/* <Route exact path="/serv" component={ Serv }/> */}
        </div>
      </Router>
    )
  }
}