widgets.filter('anySelectedTag', function() {
  return function(photos, selectedTags) {
    if (!selectedTags.length) {
      return photos;
    }
    var filteredPhotos = [];
    for (var index in photos) {
      var photo = photos[index];
      for (var i = 0; i < photo.tags.length; i++) {
        if (selectedTags.includes(photo.tags[i])) {
          filteredPhotos.push(photo);
          break;
        }
      }
    }
    return filteredPhotos;
  }
});