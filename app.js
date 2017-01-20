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
      $scope.restaurants.push(restaurant);
      $scope.name = '';
      $scope.typeOfFood = '';
    }
    $scope.deleteRestaurant = function(deletedRestaurant) {
      for (var i = 0; i < $scope.restaurants.length; i++) {
        var restaurant = $scope.restaurants[i];
        if (deletedRestaurant.name === restaurant.name) {
          $scope.restaurants.splice(i, 1);
          break;
        }
      }
    }

  }]);