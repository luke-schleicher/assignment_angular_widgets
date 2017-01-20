var widgets = angular.module('widgets', []);
    console.log('controller is working');
widgets.controller('RestaurantCtrl',
  ['$scope',
  function($scope) {

    $scope.restaurants = [];
    $scope.createRestaurant = function(){
      var restaurant = {};
      restaurant.name = $scope.name;
      restaurant.foodType = $scope.typeOfFood;
      restaurants.push(restaurant);
      $scope.name = '';
      $scope.typeOfFood = '';
    }
  }]);