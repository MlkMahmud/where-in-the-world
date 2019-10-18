const countries = (state = [], { type, payload }) => { 
  switch (type) {
    case 'FETCH COUNTRIES':
      return [...payload];
    default:
      return state;
  }
};

export default countries
