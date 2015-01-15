'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('AddProductCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
