import React from 'react';
import PropTypes from 'prop-types';
import CountryBorders from './CountryBorders';
import { formatArrayItem } from '../../helpers';

const CountryDetails = ({ country }) => (
  <div className="details-wrapper">
    <p className="country-name bold">{country.name}</p>
    <div className="details">
      <div>
        <span className="detail">
          <b>Native Name:</b> {country.nativeName}
        </span>
        <span className="detail">
          <b>Population:</b> {country.population.toLocaleString()}
        </span>
        <span className="detail">
          <b>Region:</b> {country.region}
        </span>
        <span className="detail">
          <b>Sub-Region:</b> {country.subregion}
        </span>
        <span className="detail">
          <b>Capital:</b> {country.capital}
        </span>
      </div>
      <div>
        <span className="detail">
          <b>Top Level Domain:</b> {country.topLevelDomain}
        </span>
        <span className="detail">
          <b>Currencies:</b> {formatArrayItem(country.currencies)}
        </span>
        <span className="detail">
          <b>Languages:</b> {formatArrayItem(country.languages)}
        </span>
      </div>
    </div>
    <CountryBorders country={country} />
  </div>
);

CountryDetails.propTypes = {
  country: PropTypes.shape().isRequired,
};

export default CountryDetails;
