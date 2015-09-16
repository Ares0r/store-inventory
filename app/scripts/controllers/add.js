/* globals Parse, $ */
'use strict';
angular.module('storeApp').controller('AddProductCtrl', function($scope, $cookies,$http) {
    // $scope.addr = 'StoreInventory';
    $scope.refresh = function() {
        location.reload();
    };

    $scope.validateBase = function(productName) {
        // console.log(productName);

    $http.get('https://api.parse.com/1/classes/StoreInventory', {
        params: {
            'where':'{"productName": { "$regex" : "^'+productName+'"}}' 
        },
        headers: {
            'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
            'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
            'Content-Type': 'application/json'
        }
    }).
    success(function(data, status) {
        var prod = data.results;
        console.log(prod);
        $scope.searchedProd = prod;
        // var howManyProds = prod.length;
        // var prodsOnPage = 20;
        // var howManyPages = howManyProds / prodsOnPage;
        // console.log(howManyPages);
        // var pager = '';
        // console.log('success');
        console.log(data+' '+status);
        // console.log(status);
        // console.log(prod.results[0].productName);
    }).
    error(function(data, status) {
        console.log('error');
        console.log(status);
    });

       
    };

    $scope.addProduct = function() {
        // console.log($scope.product);
        // console.log($scope.product.productName);
        if ($scope.product.netPrice === null) {
            $scope.product.netPrice = 0;
        }
        var grossPrice = $scope.product.netPrice + ($scope.product.netPrice * $scope.product.productVAT / 100);
        // console.log('grossPrice: '+grossPrice);
        $scope.product.grossPrice = grossPrice;
        // console.log($cookies.get('username'));
        var grossShelfPrice = $scope.product.netPrice + ($scope.product.netPrice * $scope.product.productVAT / 100) + ($scope.product.netPrice * $scope.product.margin / 100);
        // console.log('grossShelfPrice: '+grossShelfPrice);
        $scope.product.grossShelfPrice = grossShelfPrice;
        var products = {
            'productName': $scope.product.productName,
            'netPrice': $scope.product.netPrice,
            'grossPrice': $scope.product.grossPrice,
            'grossShelfPrice': $scope.product.grossShelfPrice,
            'invoiceNumber': $scope.product.invoiceNumber,
            'invoiceDay': $scope.product.invoiceDay.toLocaleDateString(),
            'measureUnit': $scope.product.measureUnit,
            'productVAT': $scope.product.productVAT,
            'productCode': $scope.product.prodCode,
            'productMargin': $scope.product.margin,
            'registered': $cookies.get('username')
        };
        // console.log(products);
        Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
        var StoreInventory = Parse.Object.extend('StoreInventory');
        var storeInventory = new StoreInventory();
        storeInventory.save(products, {
            success: function() {
                // $('allert').css('display': 'visible');
                $('.allert').show();
                // $('.success').show().html('Dane zostały dodane poprawnie. Dziękuję!');
                $('input').val('');
                // alert('Dane zostały dodane!');
                // console.log('Dane zostały dodane poprawnie');
                // setTimeout(location.reload, 100000);
                // location.reload(); 
                // console.log("it works!");
            },
            error: function() {
                $('.error').show().html('Niestety nie udało się dodać produktu. Spróbuj ponownie.');
                // console.log("it's broken");
            }
        });
    };
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});