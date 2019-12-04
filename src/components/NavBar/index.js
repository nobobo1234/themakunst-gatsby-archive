import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Header from './Header'
import Image from '../Image';
import ThemaKunst from '../../images/themakunstwit.png';
import NavTitle from './NavTitle';
import Select from '../Select';
import { ReactComponent as RightArrow } from '../../images/right_arrow.svg';

const options = [
  { value: '1', label: 'Leerjaar 1' },
  { value: '2', label: 'Leerjaar 2' },
  { value: '3', label: 'Leerjaar 3' }
]

const periodOptions = [
    { value: '1', label: 'Periode 1' },
    { value: '2', label: 'Periode 2' },
    { value: '3', label: 'Periode 3' },
    { value: '4', label: 'Periode 4' }
];

const opdrachtOpties = Array.from({ length: 6 }).fill(0).map((_, i) => ({ value: i, label: `Opdracht ${i+1}` }));

const NavBar = ({ siteTitle }) => {
    const [year, setYear] = useState();
    const [period, setPeriod] = useState();
    const [exercises, setExercises] = useState([]);

    return (
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
            <Select options={options} autoFocus placeholder="Leerjaar..." value={year} />
            <RightArrow style={{ fill: '#fff' }} />
            <Select options={periodOptions} placeholder="Periode..." isDisabled value={period} />
            <RightArrow style={{ fill: '#fff' }} />
            <Select options={opdrachtOpties} placeholder="Opdracht..." isDisabled value={exercises} />
        </Header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default NavBar;