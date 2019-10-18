const darkMode = (state = false, { type }) => {
  switch (type) {
    case 'TOGGLE':
      return !state;
    default:
      return state;
  }
};

export default darkMode;
