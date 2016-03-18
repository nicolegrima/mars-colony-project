(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $state, $http) {
    var ENCOUNTERS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.report = function() {
      event.preventDefault();
      $state.go('report');
    };

// fetch all the encounters
    $http({
      method: 'GET',
      url: ENCOUNTERS_GET_URL
    }).then(function(response) {
          $scope.encounters = response.data.encounters;
    }, function(error) {

    });

  }


  }

)();
