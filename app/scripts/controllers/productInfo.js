'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */


angular.module('storeApp')
  .controller('productInfoCtrl', function ($scope, $routeParams, $http) {

  		
// $http.get('https://api.parse.com/1/classes/StoreInventory/sY6YNOZSX3',
//    {
//      headers: {
//                 'X-Parse-Application-Id': eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d,
//                 'X-Parse-REST-API-Key': 38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k,
//                 'Content-Type' : 'application/json'
//               },
//      params:  { 
//                  where: whereQuery,
//                  limit: 2,
//                  // count: 1
//                  // include: "something"
//               }
//    });

  		$http.get('https://api.parse.com/1/classes/StoreInventory/'+$routeParams.productId,
  			{
  				headers:{
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type' : 'application/json'
            },

  		}).
  		success( function(data,status) {
  			// console.log('success');
  			// console.log(data+' '+status);
  			// console.log(data.productName);

  			var prod = data;

  			$scope.prod = prod;


  		}).
  		error( function(data,status) {
  			
        $scope.message = data+' '+status;

        // console.log('error');
  			// console.log(data+' '+status);
  		});

  		// console.log($routeParams);

 		$scope.productId = $routeParams.productId;

  		// var prod = $scope.prod;

		// console.log('product id:');
  		// console.log(prod.id);

  		// console.log(products.productName);

  	    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });