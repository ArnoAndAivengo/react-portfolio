import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRouter } from 'react-router-dom'

import "./Header.scss"

class Header extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <header id="home">
           <nav id="nav-wrap">
              <ul id="nav" className="nav">
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
              </ul>
           </nav>

           <div className="row banner">
              <div className="banner-text">
                 <img className="profile-pic" src={resumeData.photo} alt="" />
                 <div className="banner-container">
                   <h1 className="responsive-headline">{resumeData.name}</h1>
                   natalyaPhoto.jpeg<h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                     Я {resumeData.role}. {resumeData.roleDescription} {getYear(2016, 1, 1)} лет. {resumeData.roleDescription_1}
                   </h3>
                 </div>
              </div>
           </div>
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
