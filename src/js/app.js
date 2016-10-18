// sample angular code

(function() {

  'use strict';

  angular
    .module('cryptoApp', [
      'cryptoApp.config',
      'cryptoApp.components.trump-usd',
      'cryptoApp.components.btc-usd',
      'cryptoApp.services.cryptonator'
    ]);

})();
