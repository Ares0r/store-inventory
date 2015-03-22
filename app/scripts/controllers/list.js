'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */


angular.module('storeApp')
.controller('productListCtrl', function ($scope,$http) {
	

$http.get('https://api.parse.com/1/classes/StoreInventory',
  			{headers:{
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type' : 'application/json'
            }
  		}).
  		success( function(data,status) {

  			var prod = data.results;

  			$scope.prod = prod;

  			console.log('success');
  			console.log(data+' '+status);
  			
  			// console.log(prod.results[0].productName);
  		}).
  		error( function(data,status) {
  			console.log('error');
  			console.log(data+' '+status);
  		});
});



var delFunction = function(object) {

  console.log('object deleted');
  console.log(object);


};



	// connecting with parse
		// Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
		// var StoreInventory = Parse.Object.extend('StoreInventory');
		// var query = new Parse.Query(StoreInventory);

		// this.productList = products;
		// console.log(productList);

