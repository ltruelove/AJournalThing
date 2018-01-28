var app = angular.module("editPost", ['textAngular', 'ngFileUpload']); 
app.controller("postController", function($scope, textAngularManager, Upload) {
    $scope.postId = 0;
    $scope.postTitle = "Test Title";
    $scope.postContent = "<h1>Test</h1>";
    $scope.postFiles = [];
    $scope.isPrivate = true;
    $scope.isLive = false;

    $scope.uploadFiles = function(files){
        for(var i = 0; i < files.length; i++){
            var file = files[i];
            var exists = false;

            for(var n = 0; n < $scope.postFiles.length; n++){
                var postFile = $scope.postFiles[n];

                if(postFile.name === file.name
                    && postFile.size === file.size && postFile.lastModified === file.lastModified){
                    exists = true;
                }
            }

            if(!exists){
                $scope.postFiles.push(file);
            }

        }
        console.log($scope.postFiles);
    };
});
