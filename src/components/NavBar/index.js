import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Header from './Header'
import Image from '../Image';
import ThemaKunst from '../../images/themakunstwit.png';
import NavTitle from './NavTitle';
import Select from '../Select';

const options = [
  { value: '1', label: 'Leerjaar 1' },
  { value: '2', label: 'Leerjaar 2' },
  { value: '3', label: 'Leerjaar 3' }
]

const NavBar = ({ siteTitle }) => (
  <Header>
    <div style={{ height: '90%', width: '5rem' }}>
        <Image src={ThemaKunst} />
    </div>
    <NavTitle>
        <Link
            to="/"
            style={{
            color: `white`,
            textDecoration: `none`,
            }}
        >
            {siteTitle}
        </Link>
    </NavTitle>
    <Select options={options} autoFocus />
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default NavBar;