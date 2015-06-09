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
  .controller('loginCtrl', function ($scope, $http, $cookieStore) {



  function doSLoginMessage (message) { 
    alert(message);
    window.location.replace('/#/main');
  }



    $scope.validateLogin = function() {

      // var login = $scope.user.login;
      // var pass = $scope.user.password;


      //javascript version
      // Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');

      // Parse.User.logIn(login,pass, {
      //   success: function(user) {
      //     console.log('its ok!');
      //     window.location.replace('/#/main');
      //   },
      //   error: function(user,error) {

      //     console.log('error: ',error,user);
      //   }
      // });
        //REST API version
      $http.get('https://api.parse.com/1/login',
        {headers:{
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type' : 'application/json'
            },
          params: {
            'username': $scope.user.login,
            'password': $scope.user.password
          }
      }).
      success( function(data, status) {
        console.log('success');
        console.log(data, status);
        
        
        // console.log(userLogin);

        $cookieStore.put('username', data.username);
        // document.cookie = 'username='+data.username;
        // console.log($scope.logged);
       doSLoginMessage('Gratulacje zalogowałeś się!');
      }).
      error( function(data, status) {
        console.log('error');
        console.log(data, status);
        // var login = $scope.user.login;
        alert('Niestety logowanie nie powiodło się!');
        // console.log(login,pass);
      });
};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
