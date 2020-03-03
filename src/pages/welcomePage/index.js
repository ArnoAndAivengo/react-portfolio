import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './welcomePage.scss'

import alexandrPhoto from '../../resources/images/alexandrPhoto.jpeg'
import natalyaPhoto from '../../resources/images/natalyaPhoto.jpeg'

class Welcome extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="welcome-container">
          <div className="welcome-wrapper">
            <Link className="welcome-card" to='/alexandr'>
              <img className="profile-pic" src={alexandrPhoto} alt="alexandrPhoto"/>
              <div className="link">Александр Обухов</div>
            </Link>
          </div>
          <div className="welcome-wrapper">
            <Link className="welcome-card" to="/natalya">
              <img className="profile-pic" src={natalyaPhoto} alt="natalyaPhoto"/>
              <div className="welcome-link">Наталья Обухова</div>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Welcome;