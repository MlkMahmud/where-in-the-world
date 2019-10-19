export default (e) => async (dispatch) => { 
  const { value } = e.target;
  const url = 'https://restcountries.eu/rest/v2/';
  const params = 'fields=name;flag;region;population;capital;';

  const resource = value ? `name/${value}` : 'all';
  const response = await fetch(`${url}${resource}?${params}`);
  const payload = await response.json();

  return dispatch({
    type: 'FETCH COUNTRIES',
    payload,
  });
};
