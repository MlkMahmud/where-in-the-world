import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dispatch from '../../dispatchers/filterCountriesByRegion';

const RegionFilter = ({ filterCountries }) => (
  <div className="select-wrapper">
    <FontAwesomeIcon icon={faChevronDown} />
    <select onChange={filterCountries} >
      <option>Filter by Region</option>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
);

RegionFilter.propTypes = {
  filterCountries: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  filterCountries: dispatch,
};


export default connect(null, mapDispatchToProps)(RegionFilter);
