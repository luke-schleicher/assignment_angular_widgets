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
        filter: photo.filter
      };
    });

    $scope.test = $scope.photosData[0];
}]);