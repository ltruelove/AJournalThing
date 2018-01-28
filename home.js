var app = angular.module("home", ['ngSanitize']); 
app.controller("homeController", function($scope, $http) {
    $scope.pageTitle = 'Journal Home';
    $scope.info = {
        description: "I've been wanting to remember a lot of the times we have with the kids and it seems that it may be easier to do it in an online journal. So here you go"
    };

    $scope.postList = [];

    $scope.recentImages = [];

    $scope.getPosts = function(){
        $http({
          method: 'GET',
          url: 'http://127.0.0.1:8000/post'
        }).then(function successCallback(response) {
            console.log(response);
            $scope.postList = JSON.parse(response);
          }, function errorCallback(response) {
              console.log('error');
        });
    }

    $scope.getPosts();
});
