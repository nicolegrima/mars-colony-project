// (function() {
//   'use strict';
//
//   angular
//     .module('red')
//     .controller('ReportCtrl', ReportCtrl);
//
//   /** @ngInject */
//   function ReportCtrl($scope, $cookies, $http, $state, $filter) {
//     var ENCOUNTER_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/reports';
//     var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
//
//     $scope.showValidation = false;
//
//     $scope.encounter = {
//       colonist_id: $cookies.getObject('mars_colonist').id,
//       date: $filter('date')(newDate(), 'yyyy-MM-dd')
//     };
//
//     $https({
//       method: 'GET',
//       url: ALIENS_GET_URL
//     }).then(function(response) {
//           $scope.aliens = response.data.aliens;
//     }), function(error) {
//       // placeholder
//     });
//
//     $scope.submitReport = function(e, form) {
//         e.preventDefault();
//
//         if (form.$invalid) {
//             $scope.showValidation = true;
//           } else {
//
//     $http({
//       method: 'POST',
//       url: ENCOUNTER_POST_URL,
//       data: {
//         "encounter" : $scope.encounter
//       }
//
//     }).then(function(response) {
//           // console.log(response);
//     }), function(error) {
//           // console.log(error);
//     };
//   })
// }
// })();
