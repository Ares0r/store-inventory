'use strict';
/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */
angular.module('storeApp').controller('loginCtrl', function($scope, $http, $cookies) {

    function doSLoginMessage() {
        // alert(message);
        window.location.replace('/#/main');
    }

    $scope.validateLogin = function() {

        $http.get('https://api.parse.com/1/login', {
            headers: {
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type': 'application/json'
            },
            params: {
                'username': $scope.user.login,
                'password': $scope.user.password
            }
        }).
        success(function(data, status) {
            console.log('success');
            console.log(data, status);
            // console.log(userLogin);
            $cookies.put('username', data.username);
            // document.cookie = 'username='+data.username;
            // console.log($scope.logged);
            doSLoginMessage('Gratulacje zalogowałeś się!');
        }).
        error(function(data, status) {
            console.log('error');
            console.log(data, status);
            // var login = $scope.user.login;
            // alert('Niestety logowanie nie powiodło się!');
            // console.log(login,pass);
        });
    };
});