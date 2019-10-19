import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const CountryCard = ({ name, flag, population, capital, region }) => (
    <div className="country-card">
      <LazyLoad height={175} witdth={250}>
        <img src={flag} alt={`${name} flag`} className="country-card-img" />
      </LazyLoad>
      <div className="country-card-details">
        <Link to={`/${name}`} className="country-card-name">{name}</Link>
        <span className="country-card-text">
          <b>Population:</b>
          {' '}
          {(population).toLocaleString()}
        </span>
        <span className="country-card-text">
          <b>Capital:</b>
          {' '}
          {capital}
        </span>
        <span className="country-card-text">
          <b>Region:</b>
          {' '}
          {region}
        </span>
      </div>
    </div>
);


CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};


export default CountryCard;
