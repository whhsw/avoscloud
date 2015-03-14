// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});


AV.Cloud.define('user', function(request, response) {
  var query = new AV.Query('SuggestionByUser');
  query.equalTo('UserObjectId', request.params.userid);
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function() {
      response.error('lookup failed');
    }
  });
});