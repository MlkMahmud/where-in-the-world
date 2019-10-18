import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ darkMode, dispatch }) => (
  <header className={darkMode ? "dark" : ""}>
    <Link to="/" className="logo">
      Where in the world?
    </Link>
    <button className="toggle-theme-btn" type="button" onClick={() => dispatch({ type: 'TOGGLE' })}>
      <FontAwesomeIcon icon={faMoon} /> Dark Mode
    </button>
  </header>
);

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ darkMode }) => ({
  darkMode,
});

export default connect(mapStateToProps)(Header);
