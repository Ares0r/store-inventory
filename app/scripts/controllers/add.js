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
  	 	//$scope.product = '';
  	

      

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



        // conole.log();

    // $scope.$watch('product.netPrice', function(newVal) {
    //     $scope.product.netPrice = newVal.replace(/,/g,'.');
    //   });  


        // console.log(products);


//sending data

    // $http.defaults.headers.post = {'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
    //             'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
    //             'Content-Type' : 'application/json'};

    //   $http.post('https://api.parse.com/1/classes/StoreInventory').
    //   success( function(data,status) {

    //      var data = {};

    //     //$scope.prod = prod;

    //     console.log('success');
    //     console.log(data+' '+status);
        
    //     // console.log(prod.results[0].productName);
    //   }).
    //   error( function(data,status) {
    //     console.log('error');
    //     console.log(data+' '+status);
    //   });



  	Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
    
    var StoreInventory = Parse.Object.extend('StoreInventory');
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
