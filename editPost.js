var app = angular.module("editPost", ['textAngular']); 
app.controller("postController", function($scope, textAngularManager) {
    $scope.postContent = "<h1>Test</h1>";
});
