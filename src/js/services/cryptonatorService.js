(function() {
  'use strict';

  class Cryptonator {
    constructor($http) {
      this.$http = $http;
    }

    getCryptoPair(pair) {
      return this.$http.get(`https://api.cryptonator.com/api/ticker/${pair}`);
    }
  }

  angular
    .module('cryptoApp.services.cryptonator', [])
    .service('cryptonator', ['$http', Cryptonator]);

}());
