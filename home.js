var app = angular.module("home", ['ngSanitize']); 
app.controller("homeController", function($scope) {
    $scope.pageTitle = 'Journal Home';
    $scope.info = {
        description: "I've been wanting to remember a lot of the times we have with the kids and it seems that it may be easier to do it in an online journal. So here you go"
    };

    $scope.postList = [
        {
            id: 1,
            title: 'Post Title',
            content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet dapibus eros, sed hendrerit libero ultrices ac. Praesent interdum orci vitae neque auctor viverra. Fusce viverra volutpat convallis. Curabitur nec lorem commodo, placerat turpis a, fringilla nisi. Mauris semper ex arcu. Nam eget tortor vitae mi ullamcorper tincidunt tempus dapibus diam. Mauris varius mauris condimentum dictum rhoncus. Mauris eu tempus felis. Cras risus augue, gravida sit amet erat a, euismod placerat lacus. Curabitur eget massa fermentum purus convallis facilisis. Phasellus vulputate, metus eu consequat feugiat, purus erat lobortis dui, id vehicula ligula orci et nibh.</p>'
        },
        {
            id: 2,
            title: 'Post Title 2',
            content: '<p>Suspendisse vel vulputate velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dolor lectus, commodo nec sollicitudin vitae, lacinia nec diam. Duis aliquet aliquet viverra. Mauris nec odio interdum, finibus tortor nec, sollicitudin ligula. Duis luctus aliquet dui, id dapibus dui fringilla sit amet. Proin ut lectus nec eros efficitur vestibulum. Aenean in tellus eget sapien auctor pharetra. Praesent nec tellus in ligula condimentum pulvinar. Vivamus accumsan risus ut scelerisque rhoncus. Mauris iaculis augue gravida mauris hendrerit, auctor mollis neque hendrerit. Morbi tristique odio quis suscipit rhoncus. Sed fermentum elementum massa ut elementum. Nulla facilisi.</p>'
        },
        {
            id: 3,
            title: 'Post Title 3',
            content: '<p>Mauris finibus, lorem id aliquet rutrum, mauris metus pretium mi, quis facilisis nibh diam vel augue. Sed sit amet eleifend turpis, non sagittis dui. Integer nec malesuada urna, nec vehicula ipsum. Sed fringilla lacus odio, ut dapibus dolor condimentum ut. Ut feugiat justo quis diam auctor consequat. Vestibulum nulla nulla, tristique ac tortor sit amet, varius ullamcorper dolor. Donec fringilla vehicula nibh, ut feugiat nunc imperdiet eget. Duis urna ipsum, aliquam at odio et, tempor mattis sapien. Aliquam turpis enim, dignissim ac purus quis, lobortis ultricies massa. Nam id luctus sem, dapibus convallis mauris. Morbi ultrices libero a tellus pretium sodales. Quisque eleifend odio mauris, a dictum velit dignissim quis. Curabitur ut lacus velit. Morbi suscipit massa eros. Fusce tincidunt quis nisl id interdum. Nunc et tincidunt mi, sed fringilla sem.</p><p>Morbi ornare, nibh eget placerat posuere, nisl nisi porta ante, vel lobortis elit sapien ut purus. Duis at purus a turpis fringilla vestibulum. Sed pellentesque et est at cursus. Nunc tempus malesuada aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dolor metus, vestibulum sed odio eget, fermentum consectetur dolor. Integer mattis porta felis, id ornare dui eleifend eu. Nulla feugiat eros a mi ultricies, sed ultrices nulla aliquet. Nulla erat magna, efficitur egestas sem vitae, pellentesque maximus enim. Ut eget sapien augue. Phasellus eleifend scelerisque est, vitae tincidunt dui facilisis quis.</p>'
        }
    ];

    $scope.recentImages = [];
});
