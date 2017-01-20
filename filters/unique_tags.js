widgets.filter('uniqueTags', function() {
  return function(tags) {
    var uniqueTags = [];

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      var unique = true;

      for (var j = 0; j < uniqueTags.length; j++) {
        if (tag === uniqueTags[j]) {
          unique = false;
          break
        }
      }
      if (unique) {
        uniqueTags.push(tag);
      }
    }

    return uniqueTags;
  }
})