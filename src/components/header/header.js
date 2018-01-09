import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fb from '../../images/facebook-i.png';
import li from '../../images/linkedin.png';
import ins from '../../images/insta.png';
import git from '../../images/github.png';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="logo">
          <Link to="/">suraj kumar</Link>
        </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/suraj-kumar-8279abb4/" target="_blank">
            <img src={li} className="App-logo" alt="linkedin" />
          </a>
          <a href="https://github.com/surajkumar9131" target="_blank">
            <img src={git} className="App-logo" alt="github" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100003570380183" target="_blank">
            <img src={fb} className="App-logo" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/kumar_srj_/" target="_blank">
            <img src={ins} className="App-logo" alt="instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
