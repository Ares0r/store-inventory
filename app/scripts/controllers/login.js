/* globals Parse */
'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

angular.module('storeApp')
  .controller('loginCtrl', function ($scope,$http) {
    
    

    $scope.validateLogin = function() {

      var login = $scope.user.login;
      var pass = $scope.user.password;

      Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');

      Parse.User.logIn(login,pass, {
        success: function(user) {
          console.log('its ok!');
          window.location.replace('/#/main');
        },
        error: function(user,error) {

          console.log('error: ',error,user);
        }
      });



        // console.log(login, pass);



      // $http.get('https://api.parse.com/1/login',
      //   {headers:{
      //           'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
      //           'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
      //           'Content-Type' : 'application/json'
      //       }
      // }).
      // success( function(data,status) {

      //   var login = $scope.user.login;
      //   var pass = $scope.user.password;

      //     // var url = 'https://api.parse.com/1/login'+login+'/'+pass;
      //     // console.log(url);

      //   console.log('success');
      //   console.log(data, status);
      //   console.log(login,pass);
        
        
      //   // console.log(prod.results[0].productName);
      // }).
      // error( function(data,status) {
      //   console.log('error');
      //   console.log(data, status);

      //   var login = $scope.user.login;
      //   var pass = $scope.user.password;

      //   console.log(login,pass);
      // });


};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
