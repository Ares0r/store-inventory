'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

angular.module('storeApp')
  .controller('AddProductCtrl', function ($scope) {
  	 	//$scope.product = '';
  	$scope.addProduct = function() {
  		// console.log($scope.product);
  		// console.log($scope.product.productName);
  		var products = { 
  			'productName': $scope.product.productName,
  			'netPrice' : $scope.product.netPrice,
  			'invoiceNumber' : $scope.product.invoiceNumber,
  			'invoiceDay' : $scope.product.invoiceDay,
  			'measureUnit' : $scope.product.measureUnit,
        'productVAT': $scope.product.productVAT
  			};	

        // conole.log();

  	Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
    
    var StoreInventory = Parse.Object.extend('StoreInventory');
    var storeInventory = new StoreInventory();
      storeInventory.save(products, {
      success: function(object) {
        $('.success').show();
        $('input').val('');
        // console.log("it works!");
      },
      error: function(model, error) {
        $('.error').show();
        // console.log("it's broken");
      }
    });

  	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
