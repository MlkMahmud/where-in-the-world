const defaultState = {
  population: 0,
  region: '',
  subregion: '',
  capital: '',
  topLevelDomain: '',
  currencies: [],
  languages: [],
  borders: [],
};

const country = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'FETCH COUNTRY':
      return { ...payload };
    default:
      return state;
  }
};

export default country;
