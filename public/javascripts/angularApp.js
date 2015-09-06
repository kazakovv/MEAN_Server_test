var app = angular.module('flapperNews', ['ui.router']);




app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html',
      controller: 'MainCtrl'
    })

    .state('posts',{
        url: '/posts/{id}',
        templateUrl: '/views/posts.html',
        controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);
