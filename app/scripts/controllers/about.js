'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
