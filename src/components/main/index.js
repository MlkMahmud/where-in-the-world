import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Main = ({ darkMode, children }) => (
  <main className={darkMode ? "dark" : ""}>
    {children}
  </main>
);

Main.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = ({ darkMode }) => ({
  darkMode,
});

export default connect(mapStateToProps)(Main);
