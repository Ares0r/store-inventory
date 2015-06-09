/* globals Parse, $ */

'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

angular.module('storeApp')
  .controller('AddProductCtrl', function ($scope,$cookieStore) {

    // $scope.addr = 'StoreInventory';

    $scope.connection = {
      'shortAddr' : 'stIn',
      'Addr'  :  'https://api.parse.com/1/classes/StoreInventory/', 
    }


    $scope.addProduct = function() {
  		// console.log($scope.product);
  		// console.log($scope.product.productName);

        var grossPrice = $scope.product.netPrice + ($scope.product.netPrice * $scope.product.productVAT/100);
        console.log('grossPrice: '+grossPrice);

         $scope.product.grossPrice = grossPrice;
         console.log($cookieStore.get('username'));


        var grossShelfPrice = $scope.product.netPrice + ($scope.product.netPrice * $scope.product.productVAT/100) + ($scope.product.netPrice * $scope.product.margin/100);
        console.log('grossShelfPrice: '+grossShelfPrice);

         $scope.product.grossShelfPrice = grossShelfPrice;


  		var products = { 
  			'productName': $scope.product.productName,
  			'netPrice' : $scope.product.netPrice,
        'grossPrice': $scope.product.grossPrice,
        'grossShelfPrice' : $scope.product.grossShelfPrice,
  			'invoiceNumber' : $scope.product.invoiceNumber,
  			'invoiceDay' : $scope.product.invoiceDay.toLocaleDateString(),
  			'measureUnit' : $scope.product.measureUnit,
        'productVAT': $scope.product.productVAT,
        'productCode': $scope.product.prodCode,
        'productMargin': $scope.product.margin,
        'registered': $cookieStore.get('username')
  			};	

  	Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
    
    var StoreInventory = Parse.Object.extend(connection.shortAddr);
    var storeInventory = new StoreInventory();
      storeInventory.save(products, {
      success: function() {
        $('.success').show().html('Dane zostały dodane poprawnie. Dzięki!');
        $('input').val('');
        // console.log("it works!");
      },
      error: function() {
        $('.error').show().html('Niestety nie udało się dodać produktu. Spróbuj ponownie.');
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
