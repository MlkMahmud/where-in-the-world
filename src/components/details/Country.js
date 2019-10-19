import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryFlag from './CountryFlag';
import CountryDetails from './CountryDetails';
import dispatch from '../../dispatchers/getCountry';


const Country = ({ darkMode, country, getCountry }) => {
  const { name } = useParams();
  useEffect(() => {
    getCountry(name);
  }, []);

  return (
    <section className={darkMode ? "country dark" : "country"}>
      <CountryFlag country={country} />
      <CountryDetails country={country} />
    </section>
  );
};

Country.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  country: PropTypes.shape().isRequired,
  getCountry: PropTypes.func.isRequired,
};

const mapStateToProps = ({ darkMode, country }) => ({
  darkMode,
  country,
});

const mapDispatchToProps = {
  getCountry: dispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
