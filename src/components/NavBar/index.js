import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Header from './Header'
import Image from '../image';
import ThemaKunst from '../../images/thema kunst.jpg';

const NavBar = ({ siteTitle }) => (
  <Header>
    <div style={{ width: '3rem', height: '3rem' }}>
        <Image src={ThemaKunst} />
    </div>
    <h1 style={{ margin: 0 }}>
    <Link
        to="/"
        style={{
        color: `white`,
        textDecoration: `none`,
        }}
    >
        {siteTitle}
    </Link>
    </h1>
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default NavBar;