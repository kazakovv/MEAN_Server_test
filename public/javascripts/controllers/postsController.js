
app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){

    $scope.post = posts.posts[$stateParams.id]; //vzima id za saotvetnia post
    $scope.incrementUpvotes = function(post) {
        post.upvotes +=1;
    };
    $scope.addComment = function() {
        if($scope.body ==='') { return; } //ako e prazen komentara izlizame
        if($scope.post.comments === undefined ) {
            $scope.post.comments= [];
        }
        $scope.post.comments.push({
            body: $scope.body,
            author: 'user',
            upvotes: 0
        });
        $scope.body= '';
    };
}]);