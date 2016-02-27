(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($scope, $state, $http) {
      $scope.description = 'Angular Seed Application';

      $scope.goToCheckin = function() {
        event.preventDefault();
        $state.go('check-in');
      };

  }

})();
