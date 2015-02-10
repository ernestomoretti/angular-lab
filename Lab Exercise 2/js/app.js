'use strict';

var starredGitRepoApp = angular.module('starredGitRepoApp', [
  'ngRoute',
  'starredGitRepoControllers',
  'gitRepoServices',
  'satellizer'
]);

starredGitRepoApp.config(['$routeProvider','$authProvider',
  function($routeProvider,$authProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/Login.html',
        controller: 'LoginCtrl'
      }).
      when('/repositories', {
        templateUrl: 'partials/RepositoryList.html',
        controller: 'GitRepoCtrl'
      }).
      when('/repositories/:repoName', {
        templateUrl: 'partials/RepositoryDetails.html',
        controller: 'RepositoryDetailCtrl',
      }).
      otherwise({
        redirectTo: '/login'
      });


  $authProvider.github({
      clientId: '247d8a6794ed2f689092'
    });

  }]);



