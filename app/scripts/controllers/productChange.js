/* globals Parse */

'use strict';

angular.module('storeApp')
  .controller('productChangeCtrl', function ($scope, $routeParams, $http) {

$scope.productId = $routeParams.productId;
// var newPrice = $scope.newNetPrice;

$http.get('https://api.parse.com/1/classes/StoreInventory/' + $scope.productId,
        {headers:{
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type' : 'application/json'
            }
      }).
        success(function (data, status) {
          console.log(data, status);
            $scope.prod = data;
      }).
        error(function (data, status) {
          console.log(data, status);
        });

    $scope.changePrice = function() {

      // console.log('cena: ',$scope.newPrice);
      // console.log($scope.prod.netPrice);
      // console.log($scope.newNetPrice);
      // console.log($routeParams);


      Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');

      var UpdatePrice = Parse.Object.extend('StoreInventory');
      // console.log('UpdatePrice');
      var query = new Parse.Query(UpdatePrice);
      // console.log('query');

      query.equalTo('objectId',$scope.productId);
      query.first({
        success: function (object) {
        // console.log('query.success');
        // console.log($scope.prod.invoiceDay);
        // console.log('oldGrossPrice: '+$scope.prod.grossPrice);
         // console.log('newGrossPrice: '+newGrossPrice);
         // console.log($scope.prod.grossShelfPrice);

       var newGrossPrice = $scope.newNetPrice + ($scope.newNetPrice * $scope.prod.productVAT/100);
       var newGrossShelfPrice = $scope.newNetPrice + ($scope.newNetPrice * $scope.prod.productVAT/100) + ($scope.newNetPrice * $scope.prod.productMargin/100);

        // console.log('shelf price: '+$scope.prod.grossShelfPrice);
        // console.log('margin : '+$scope.prod.productMargin);
        // console.log('vat : '+$scope.prod.productVAT);
        // console.log('new shelf price: '+newGrossShelfPrice);

         // setting new netprice
         object.set('grossPrice', newGrossPrice);
         object.set('grossShelfPrice', newGrossShelfPrice);
         object.set('netPrice', $scope.newNetPrice);

         // saving changed object
         object.save();
         alert('Cena została zmieniona!');
         window.location.replace('/#/list-product');  
        },
        error: function (error) {
          console.log('query.error');
          alert('Error: ' +error.code + ' ' + error.message);
        }

      });


    // $http.put('https://api.parse.com/1/classes/StoreInventory/'+$routeParams,
    //   {headers:{
    //         'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
    //         'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
    //         'Content-Type': 'application/json'
    //   }
    //   }).
    //   success(function(data,status){
    //     'netPrice': $scope.newNetPrice;
    //     console.log(data,status);
    //     console.log('it works!');
    //   }).
    //   error(function(){
    //     console.log(data,status);
    //   });



    };
        

      $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });