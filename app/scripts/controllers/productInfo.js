'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

angular.module('storeApp')
  .controller('productInfoCtrl', function ($scope, $routeParams) {

  		console.log($routeParams);
  		console.log(products.productName);

  	    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });