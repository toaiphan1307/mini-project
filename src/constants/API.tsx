export const API = {
  GET_COUNTRY: 'https://countries.trevorblades.com/',
};

export const GET_LIST_DATA_COUNTRY = `
  query {
      continents{
        name
        code
        countries{
          name
            capital
          emoji
          code
            phone
          currency
        }
      }
    }
  `;

export default API;
