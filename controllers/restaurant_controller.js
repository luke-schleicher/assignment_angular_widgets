widgets.controller('RestaurantCtrl',
  ['$scope',
  function($scope) {

    $scope.ordering = 'foodType';

    $scope.arrow = '\u2193';

    $scope.restaurants = [
        { id: 0, name: 'Burger King', foodType: 'Fries', image: 'http://burgerking.s3-website-us-east-1.amazonaws.com/sites/default/files/papas%20medianas.png' },
        { id: 1, name: 'Panda Express', foodType: 'Noodles', image: 'https://s3.amazonaws.com/PandaExpressWebsite/Responsive/img/food/navigation/sidedishes.jpg' },
        { id: 2, name: 'Cowboy Chicken', foodType: 'Chicken' },
        { id: 3, name: 'Dominos', foodType: 'Pizza' },
        { id: 4, name: 'Egg Place', foodType: 'Eggs' }      
      ];

    $scope.createRestaurant = function(){
      var restaurant = {};
      restaurant.id = $scope.restaurants.length;
      restaurant.name = $scope.name;
      restaurant.foodType = $scope.typeOfFood;
      restaurant.image = $scope.imageURL;
      $scope.restaurants.push(restaurant);
      $scope.name = '';
      $scope.typeOfFood = '';
      $scope.imageURL = '';
    }

    $scope.deleteRestaurant = function(deletedRestaurant) {
      for (var i = 0; i < $scope.restaurants.length; i++) {
        var restaurant = $scope.restaurants[i];
        if (deletedRestaurant.id === restaurant.id) {
          $scope.restaurants.splice(i, 1);
          break;
        }
      }
    }

    $scope.setOrderBy = function(ordering) {
      if ($scope.ordering === ordering) {
        $scope.ordering = '-' + ordering;
        $scope.arrow = '\u2191';
      } else {
        $scope.ordering = ordering;
        $scope.arrow = '\u2193';
      }
    }

    $scope.getArrow = function(type) {
      if (type === $scope.ordering || '-' + type === $scope.ordering) {
        return $scope.arrow;        
      }
      return '';
    }

  }]);