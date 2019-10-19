import React from 'react';
import PropTypes from 'prop-types';

const CountryFlag = ({ country }) => (
  <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
);

CountryFlag.propTypes = {
  country: PropTypes.shape().isRequired,
}

export default CountryFlag;
