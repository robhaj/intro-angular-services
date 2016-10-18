(function() {

  'use strict';

  angular
    .module('cryptoApp.components.trump-usd', [])
    .controller('trumpController', trumpController);

  trumpController.$inject = ['cryptonator'];

  function trumpController(cryptonator) {
    /*jshint validthis: true */
    this.getPrice = () => {
      cryptonator.getCryptoPair('trump-usd')
      .then(res => {
        this.price = res.data.ticker.price;
      });
    };
  }

})();
