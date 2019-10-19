import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CountryCard from './CountryCard';
import dispatch from '../../dispatchers/getCountries';

const CountryGrid = ({ countries, darkMode, getCountries }) => {
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <section className={darkMode ? 'country-grid dark' : 'country-grid'}>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </section>
  );
};

CountryGrid.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  darkMode: PropTypes.bool.isRequired,
  getCountries: PropTypes.func.isRequired,
};

const mapStateToProps = ({ darkMode, countries }) => ({
  darkMode,
  countries,
});

const mapDispatchtoProps = {
  getCountries: dispatch,
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(CountryGrid);
