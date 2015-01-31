'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

angular.module('storeApp')
  .controller('AddProdCtrl', function ($scope) {
  	// var d = date(getFullYear(), getMonth(), getDate());
  	// $scope.myForm = {};
  	// $scope.myForm.productName = "jajko";
  	// $scope.myForm.netPrice =  12.12;
  	// $scope.myForm.invoiceNumber = "12/32/OCO/2015";
  	// // $scope.myForm.invoiceDay = d;
  	// $scope.myForm.measureUnit = "szt.";

  	//$scope.product = '';
  	$scope.addProduct = function() {
  		console.log($scope.product);
  	};
  	

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
