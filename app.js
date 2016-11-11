var app = angular.module('flapperNews', []);

// Define main controller
app.controller('MainCtrl', [
    '$scope',
    // define array
    function($scope){
        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ];
        // enable user to add post
        $scope.addPost = function(){
            // check if user has entered nothing
            if(!$scope.title || $scope.title === "") { return; }
            //push new post into array
            $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
            $scope.title = '';
            $scope.link = '';
        };
        // increment upvotes
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };
    }
]);
