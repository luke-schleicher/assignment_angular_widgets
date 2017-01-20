widgets.controller('PhotosCtrl',
  ['$scope',
  function($scope) {
    var rawFeed = instagramResponse.data; // array
    $scope.photoData = rawFeed.map(function(photo) {
      return {
        image: photo.images.standard_resolution.url,
        url: photo.link,
        username: photo.user.username,
        usersUrl: "https://www.instagram.com/" + photo.user.username,
        postedAt: photo.created_time,
        likeCount: photo.likes.count,
        commentCount: photo.comments.count,
        filter: photo.filter
      }
    })
}]);