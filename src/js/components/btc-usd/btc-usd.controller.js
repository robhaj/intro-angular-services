(function() {

  'use strict';

  angular
    .module('cryptoApp.components.btc-usd', [])
    .controller('btcController', btcController);

  btcController.$inject = ['cryptonator'];

  function btcController(cryptonator) {
    /*jshint validthis: true */
    this.getPrice = () => {
      cryptonator.getCryptoPair('btc-usd')
      .then(res => {
        this.price = res.data.ticker.price;
      });
    };

    this.greeting = 'Hello World!';
  }

})();
