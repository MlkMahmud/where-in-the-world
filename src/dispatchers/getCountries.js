const getCountries = () => async (dispatch) => {
  const params = 'fields=name;population;region;capital;flag;'
  const url = `https://restcountries.eu/rest/v2/all?${params}`
  const response = await fetch(url);
  const payload = await response.json();
  return dispatch({
    type: 'FETCH COUNTRIES',
    payload,
  });
};


export default getCountries;
