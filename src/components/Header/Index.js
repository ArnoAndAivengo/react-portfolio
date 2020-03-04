import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRouter } from 'react-router-dom'

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import "./Header.scss"

class Header extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <header id="home" className="header">
          <Navbar fixed="top" bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
              <Nav activeKey="/home">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    click=""
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={500}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={500}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={500}>
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={500}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <LinkRouter
                    activeClass="active"
                    to="/natalyaPortfolio">
                    Full Portfolio
                  </LinkRouter>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Container>
            <Row>
              <div className="contact">
                 <img className="contact-img" src={resumeData.photo} alt="" />
                 <div className="contact-panel">
                   <h1>{resumeData.name}</h1>
                   <h3>
                     Я {resumeData.role}. {resumeData.roleDescription} {getYear(2016, 1, 1)} лет. {resumeData.roleDescription_1}
                   </h3>
                 </div>
              </div>
            </Row>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default Header

function getYear(y,m,d){
    var r = new Date(new Date().getTime() - Date.UTC(y,m-1,d));
    return [r.getFullYear()-1970]
}
