import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import RegionFilter from './RegionFilter';


const FormControlWrapper = ({ darkMode }) => (
  <div className={darkMode ? "form-control-wrapper dark" : "form-control-wrapper"}>
    <SearchBar />
    <RegionFilter />
  </div>
);

FormControlWrapper.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};


const mapStateToProps = ({ darkMode }) => ({
  darkMode,
});

export default connect(mapStateToProps)(FormControlWrapper);
