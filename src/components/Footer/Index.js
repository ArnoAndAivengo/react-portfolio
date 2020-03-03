import React, { Component } from 'react';

import './Footer.scss'

class Footer extends Component {

  render() {

    return (
      <footer id="footer">
      <div className="row">
        <div className="twelve columns">
          <a className="transition" href="arnoandaivengo.ru">{
            this.props.name === 'Обухова Наталья' ? '© 2020 Обухова Наталья' : '© 2020 Обухов Александр'
          }
          </a>
        </div>
        {/*<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>*/}
      </div>
    </footer>
    );
  }
}

export default Footer;
