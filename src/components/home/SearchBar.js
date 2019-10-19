import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dispatch from '../../dispatchers/filterCountriesByName';


const SearchBar = ({ filterCountries }) => (
  <div className="search-bar-wrapper">
    <input onChange={filterCountries} className="search-bar-input" type="search" placeholder="Search for a country..." />
    <button type="submit" className="search-bar-btn">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </div>
);

SearchBar.propTypes = {
  filterCountries: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  filterCountries: dispatch,
};

export default connect(null, mapDispatchToProps)(SearchBar);
