import React, {Component} from 'react';
import { Header, Footer, GalleryFullPortfolio } from '../../components/Index';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRouter } from 'react-router-dom'
import resumeDataNatalya from '../../resources/store/resumeDataNatalya';

class natalyaPage extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="/" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="nav-item">
                <LinkRouter
                  activeClass="active"
                  to="/natalya">
                  Home
                </LinkRouter>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="other"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Разное
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="layouts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Макеты
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="prints"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Принты
                </Link>
              </li>
            </ul>
          </nav>
        </React.Fragment>
        <GalleryFullPortfolio resumeData={resumeDataNatalya}/>
        <Footer resumeData={resumeDataNatalya} name='Обухова Наталья'/>
      </div>
    )
  }
}

export default natalyaPage;