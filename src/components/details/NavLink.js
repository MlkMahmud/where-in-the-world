import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavLink = ({ darkMode }) => (
  <Link to="/" className={darkMode ? "nav-link dark" : "nav-link"}>
    <FontAwesomeIcon icon={faArrowLeft} />
    {' '}
    Back
  </Link>
);

NavLink.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ darkMode }) => ({
  darkMode,
});

export default connect(mapStateToProps)(NavLink);
