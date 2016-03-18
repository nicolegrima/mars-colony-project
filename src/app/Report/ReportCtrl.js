(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $cookies, $http, $state, $filter) {
    var ENCOUNTER_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

// fetch all alien types
    $http({
      method: 'GET',
      url: ALIENS_GET_URL
    }).then(function(response) {
          $scope.aliens = response.data.aliens;
    }, function(error) {
      // TO DO for Back-End Dev: Handle Error
  });

        $scope.showValidation = false;

        $scope.encounter = {
          colonist_id: $cookies.getObject('mars_colonist').id,
          date: $filter('date')(new Date(), 'yyyy-MM-dd')
        };

    $scope.submit = function($event) {
        event.preventDefault();

        if ($scope.reportForm.$invalid) {
            $scope.validate = true;
          } else {

    $http({
      method: 'POST',
      url: ENCOUNTER_POST_URL,
      data: {
        "encounter" : $scope.encounter
      }

    }).then(function(response) {
              $state.go('encounters');
    }, function(error) {
          // TO DO for Back-End Dev: Handle Error
    });

        }
      };
   }
})();
