const getCountry = (name) => async (dispatch) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  const [payload] = await response.json();
  return dispatch({
    type: 'FETCH COUNTRY',
    payload,
  });
};

export default getCountry;
