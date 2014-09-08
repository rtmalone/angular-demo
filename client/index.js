(function(){
  'use strict';

  angular.module('demo', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.name = 'Groot!';
    $scope.age = 10;
    $scope.dogs = [
      {name: 'fido', age: 3},
      {name: 'poptart', age: 5},
      {name: 'The Count', age: 7}
    ];
  }]);
})();
