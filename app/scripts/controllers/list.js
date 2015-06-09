'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */

angular.module('storeApp')
.controller('productListCtrl', function ($scope, $http) {
	
// $http.get('https://api.parse.com/1/classes/StoreInventory',
$http.get('https://api.parse.com/1/classes/StoreInventory',
  			{headers:{
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type' : 'application/json'
            }
  		}).
  		success( function(data,status) {
       
       var prod = data.results;
       $scope.prod = prod;

  			console.log('success');
  			console.log(data+' '+status);
  			
  			// console.log(prod.results[0].productName);
  		}).
  		error( function(data,status) {
  			console.log('error');
  			console.log(data+' '+status);
  		});


  $scope.delProduct = function(object) {

  // console.log(object);

  $http.delete('https://api.parse.com/1/classes/StoreInventory/'+object,
        {headers:{
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type' : 'application/json'
            }
      }).
      success( function(data,status) {

        console.log('success');
        console.log(data+' '+status);
        // alert('Produkt został usunięty!');
        window.location('/#/list-product');
        
        // console.log(prod.results[0].productName);
      }).
      error( function(data,status) {
        console.log('error');
        console.log(data+' '+status);
      });

};


/**
* Converts a value to a string appropriate for entry into a CSV table.  E.g., a string value will be surrounded by quotes.
* @param {string|number|object} theValue
* @param {string} sDelimiter The string delimiter.  Defaults to a double quote (") if omitted.
*/
function toCsvValue(theValue, sDelimiter) {
  var t = typeof (theValue), output;
 
  if (typeof (sDelimiter) === 'undefined' || sDelimiter === null) {
    sDelimiter = '"';
  }
 
  if (t === 'undefined' || t === null) {
    output = '';
  } else if (t === 'string') {
    output = sDelimiter + theValue + sDelimiter;
  } else {
    output = String(theValue);
  }
 
  return output;
}




/**
* Converts an array of objects (with identical schemas) into a CSV table.
* @param {Array} objArray An array of objects.  Each object in the array must have the same property list.
* @param {string} sDelimiter The string delimiter.  Defaults to a double quote (") if omitted.
* @param {string} cDelimiter The column delimiter.  Defaults to a comma (,) if omitted.
* @return {string} The CSV equivalent of objArray.
*/
function toCsv(objArray, sDelimiter, cDelimiter) {
  var i, l, names = [], name, value, obj, row, output = '', n, nl;
 
  // Initialize default parameters.
  if (typeof (sDelimiter) === 'undefined' || sDelimiter === null) {
    sDelimiter = '"';
  }
  if (typeof (cDelimiter) === 'undefined' || cDelimiter === null) {
    cDelimiter = ',';
  }
 
  for (i = 0, l = objArray.length; i < l; i += 1) {
    // Get the names of the properties.
    obj = objArray[i];
    row = '';
    if (i === 0) {
      // Loop through the names
      for (name in obj) {
        if (obj.hasOwnProperty(name)) {
          names.push(name);
          row += [sDelimiter, name, sDelimiter, cDelimiter].join('');
        }
      }
      row = row.substring(0, row.length - 1);
      output += row;
    }
 
    output += '\n';
    row = '';
    for (n = 0, nl = names.length; n < nl; n += 1) {
      name = names[n];
      value = obj[name];
      if (n > 0) {
        row += ',';
      }
      row += toCsvValue(value, '"');
    }
    output += row;
  }
 
  return output;
}



$scope.exportProduct = function() {
  var data = $scope.prod;
  // var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];

  var readyData = toCsv(data);
  

  // var csvContent = 'data:text/csv;charset=utf-8,';
  readyData = 'data:text/csv;charset=\'utf-8\','+ readyData;    

  console.log(readyData);


  var encodedUri = encodeURI(readyData);
   
   console.log(encodedUri);

  var link = document.createElement('a');
  
  console.log(link);

  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'my_data.csv');

  link.click(); 


};



});




	// connecting with parse
		// Parse.initialize('eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d', 'LZDVFfrpgr7q5pJyFFE23NhziBxP6fcaieYNweWI');
		// var StoreInventory = Parse.Object.extend('StoreInventory');
		// var query = new Parse.Query(StoreInventory);

		// this.productList = products;
		// console.log(productList);
