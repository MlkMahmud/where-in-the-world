export default (e) => async (dispatch) => {
  const { value } = e.target;
  const url = 'https://restcountries.eu/rest/v2/';
  const params = '?fields=name;population;region;capital;flag;';
  const resource = value ? `region/${value}` : 'all';

  const response = await fetch(`${url}${resource}${params}`);
  const payload = await response.json();

  return dispatch({
    type: 'FETCH COUNTRIES',
    payload,
  });
};
