export default class ConvertService {
  static exchange(baseUSD, newCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/5f227f3853a28e15e39e8e2b/pair/${baseUSD}/${newCurrency}`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusTest}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}