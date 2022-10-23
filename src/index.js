import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertService from './convert.js';

// business logic

function exchange(baseUSD, convertCurr) {
  ConvertService.exchange(baseUSD, convertCurr).then(function (response) {
    if (response.conversion_rate) {
      printElements(response, convertCurr);
    } else {
      printError(response);
    }
  });
}
