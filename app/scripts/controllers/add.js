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
  .controller('AddProductCtrl', function ($scope, $cookies, $window) {

    // $scope.addr = 'StoreInventory';

    $scope.addProduct = function() {
  		// console.log($scope.product);
  		// console.log($scope.product.productName);

        var grossPrice = $scope.product.netPrice + ($scope.product.netPrice * $scope.product.productVAT/100);
        // console.log('grossPrice: '+grossPrice);

         $scope.product.grossPrice = grossPrice;
         // console.log($cookies.get('username'));


        var grossShelfPrice = $scope.product.netPrice + ($scope.product.netPrice * $scope.product.productVAT/100) + ($scope.product.netPrice * $scope.product.margin/100);
        // console.log('grossShelfPrice: '+grossShelfPrice);

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
        'registered': $cookies.get('username')
  			};	

        // console.log(products);

  	Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
    
    var StoreInventory = Parse.Object.extend('StoreInventory');
    var storeInventory = new StoreInventory();
      storeInventory.save(products, {
      success: function() {
        // $('allert').css('display': 'visible');
        $('.allert').show();
        // $('.success').show().html('Dane zostały dodane poprawnie. Dziękuję!');
        $('input').val('');
        // alert('Dane zostały dodane!');
        // console.log('Dane zostały dodane poprawnie');
        // setTimeout(location.reload, 100000);

        // location.reload(); 


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
