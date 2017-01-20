widgets.controller('PhotosCtrl',
  ['$scope',
  function($scope) {

    var rawFeed = instagramResponse.data; // array

    $scope.photosData = rawFeed.map(function(photo) {
      return {
        imageUrl: photo.images.standard_resolution.url,
        pageUrl: photo.link,
        username: photo.user.username,
        usersUrl: "https://www.instagram.com/" + photo.user.username,
        postedAt: parseInt(photo.created_time) * 1000,
        likeCount: photo.likes.count,
        commentCount: photo.comments.count,
        filter: photo.filter,
        tags: photo.tags
      };
    });

    $scope.filters = [];
    $scope.tags = [];

    $scope.photosData.forEach(function(element) {

      var filter = element.filter;
      var unique = true;

      for (var i = 0; i < $scope.filters.length; i++) {
        if ($scope.filters[i] === filter) {
          unique = false;
          break;
        }
      }

      if (unique) {
        $scope.filters.push(filter);        
      }

    });

    $scope.photosData.forEach(function(element) {

      var tags = element.tags;

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        $scope.tags.push(tag);        
      }

    });

}]);