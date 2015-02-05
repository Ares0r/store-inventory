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

  	// Parse.initialize("eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d", "LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI");
    var StoreInv = Parse.Object.extend("StoreInventory");
    var storeInv = new StoreInv();


	var query = new Parse.Query(StoreInv);

	query.get("0QzK25ADnj", {
		success: function(storeInv) {
			console.log("it works!");
		},
		error: function(object,error) {

		}
	});

    console.log(something);

  });