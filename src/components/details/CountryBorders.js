import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryBorders = ({ country }) => (
  <div className="border-countries-wrapper">
    <b>Border Countries:</b>{' '}
    {country.borders.map((item) => (
      <Link to={`/${item}`} className="border-country">{item}</Link>
    ))}
  </div>
);

CountryBorders.propTypes = {
  country: PropTypes.shape().isRequired,
};

export default CountryBorders;
