'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

var products = [
 	{
		id:1,
		productName: 'Snickers',
		netPrice: 1.00,
		grossPrice:1.23,
		invoiceNumber: 'FA/01/2014',
		invoiceDay: '01-01-2014',
		measureUnit: 'szt.',
		productVAT: 23

	},
	{
		id:2,
		productName: 'Mars',
		netPrice: 1.00,
		grossPrice:1.23,
		invoiceNumber: 'FA/01/2014',
		invoiceDay: '01-01-2014',
		measureUnit: 'szt.',
		productVAT: 23

	},
	{
		id:3,
		productName: 'Vifon',
		netPrice: 1.50,
		grossPrice:1.85,
		invoiceNumber: 'FA/02/2014',
		invoiceDay: '01-02-2014',
		measureUnit: "szt.",
		productVAT: 23

	},
	{
		id:4,
		productName: 'Mop',
		netPrice: 30,
		grossPrice:37,
		invoiceNumber: 'FA/02/2014',
		invoiceDay: '23-02-2014',
		measureUnit: 'szt.',
		productVAT: 23

	},
	{
		id:101,
		productName: 'Lodówka',
		netPrice: 1520.02,
		grossPrice:1869.62,
		invoiceNumber: 'FA/02/2014',
		invoiceDay: '01-02-2014',
		measureUnit: 'szt.',
		productVAT: 8

	},
	{
		id:1010,
		productName: 'Coca-Cola',
		netPrice: 0.60,
		grossPrice:0.74,
		invoiceNumber: 'FA/03/2014',
		invoiceDay: '10-02-2014',
		measureUnit: 'szt.',
		productVAT: 11

	},
	{
		id:2010,
		productName: 'Pepsi',
		netPrice: 0.60,
		grossPrice:0.74,
		invoiceNumber: 'FA/04/2014',
		invoiceDay: '15-02-2014',
		measureUnit: 'szt.',
		productVAT: 23

	}
  ];

// var products = [
//  	{
// 		productName: 'Snickers',
// 		netPrice: 1.00,
// 		grossPrice:1.23,
// 		invoiceNumber: 'FA/01/2014',
// 		invoiceDay: '01-01-2014',
// 		measureUnit: 'szt.',
// 		productVAT: 23,

// 	}
// ];





angular.module('storeApp')
.controller('productListCtrl', function ($scope) {
	
		// var prod = $scope.prod;

		$scope.prod = products;

		// console.log(prod);


});


	// connecting with parse
		// Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
		// var StoreInventory = Parse.Object.extend('StoreInventory');
		// var query = new Parse.Query(StoreInventory);

		// this.productList = products;
		// console.log(productList);

