'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

angular.module('storeApp')
  .controller('listCtrl', function ($scope) {

  	$scope.hello = 'nice';

  	Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
		var StoreInventory = Parse.Object.extend('StoreInventory');
		var query = new Parse.Query(StoreInventory);

		query.limit(1).find({
			success: function(results) {
				// alert("Success" +results.length);
					var products = [];
				for (var i=0; i<results.length;i++) {
					var object = results[i];
					var invoiceDay = object.attributes.invoiceDay;
					// console.log(object);
					// console.log(object.id);
					// console.log(invoiceDay);
					// console.log(object);					
				}
				return $scope.invoiceDay;
			},
			error: function(error) {
				alert('Error' + error.code + ' ' + error.message);
			}
		})



		// query.get("0QzK25ADnj", {
		//   success: function(storeInventory) {
		//     // The object was retrieved successfully.
		//     console.log("success");
		//     var invoiceDate = storeInventory.get("invoiceDay");
		//     console.log(invoiceDate);
		//   },
		//   error: function(object, error) {
		//     // The object was not retrieved successfully.
		//     // error is a Parse.Error with an error code and message.
		//     console.log("fail");
		//   }
		// });



  });