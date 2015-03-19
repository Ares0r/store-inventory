/* globals Parse, $ */

'use strict';

angular.module('storeApp')
  .controller('productChangeCtrl', function ($scope, $routeParams) {

$scope.productId = $routeParams.productId;

Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
    var ListItems = Parse.Object.extend("StoreInventory");
    var listItems = new Parse.Query(ListItems);
    listItems.get($routeParams.productId, {
        success: function(listItems) {
          
          var prod = listItems.attributes;
          console.log('prod: ',prod);
          $scope.prod = prod;
          console.log('product pobrany');

          // The object was retrieved successfully.
        },
        error: function(object, error) {
          console.log(object,error);
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
        }
      });



//   $scope.changeProduct = function() {
//       // console.log('clicked');

//       var newPrice = $scope.product.newNetPrice;


//       Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');

//       var UpdatePrice = Parse.Object.extend('updatePrice');
//       var updatePrice = new UpdatePrice();

//       updatePrice.save(null, {
//         success: function(updatePrice) {
//           console.log('changed');
//           updatePrice.set('netPrice',newPrice);
//           updatePrice.save();
//         }
//       });
// };

  	    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });