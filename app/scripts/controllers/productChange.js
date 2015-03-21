/* globals Parse, $ */

'use strict';

angular.module('storeApp')
  .controller('productChangeCtrl', function ($scope, $routeParams,$http) {

$scope.productId = $routeParams.productId;
var newPrice = $scope.newNetPrice;

$http.get('https://api.parse.com/1/classes/StoreInventory/'+$scope.productId,
        {headers:{
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type' : 'application/json'
            }
      }).
        success(function(data,status) {
          console.log(data,status);

          

      }).
        error(function(data,status) {
          console.log(data,status);
        });

    $scope.changePrice = function() {

    // console.log('cena: ',$scope.newPrice);
  
      // console.log($scope.prod.netPrice);
      console.log($scope.newNetPrice);
      console.log($routeParams);


    $http.put('https://api.parse.com/1/classes/StoreInventory/'+$routeParams,
      {headers:{
            'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
            'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
            'Content-Type': 'application/json'
      },
      params: {
        'netPrice': $scope.newNetPrice
      }
      }).
      success(function(data,status){
        console.log(data,status);
        console.log('it works!');
      }).
      error(function(){
        console.log(data,status);
      });



    };
        

      $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });