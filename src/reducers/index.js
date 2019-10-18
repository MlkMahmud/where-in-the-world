import { combineReducers } from 'redux';
import countries from './countries';
import country from './country';
import darkMode from './darkMode';

export default combineReducers({
  countries,
  country,
  darkMode,
});
