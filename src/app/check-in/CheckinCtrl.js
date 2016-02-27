(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $http, $cookies, $state, $rootScope) {
  	var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
  	var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

// fetch all the jobs
  	$http({
  		method: 'GET',
  		url: JOBS_GET_URL
  	}).then(function(response) {
  			$scope.jobs = response.data.jobs;
  	}, function(error) {
  			// TO DO for Back-End Dev: Handle Error
  	});

    // placeholder for POST request to /colonist
    $scope.colonist = {};

    $cookies.putObject('mars_colonist', undefined);

    $scope.showValidation = false;

  	$scope.login = function() {
  		event.preventDefault();

      if ($scope.checkinForm.$invalid) {
        $scope.showValidation = true;
      } else {

    	$http({
  			method: 'POST',
  			url: COLONIST_POST_URL,
  			data: {
				"colonist" : $scope.colonist
			}

  		}).then(function(response) {
            $cookies.putObject('mars_colonist', response.data.colonist);
            $state.go('encounters');
  		}, function(error){
  			   // TO DO for Back-End Dev: Handle Error
  		});
  	}

  };
}

})();
