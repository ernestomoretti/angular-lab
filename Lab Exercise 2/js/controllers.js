var starredGitRepoApp = angular.module('starredGitRepoApp', ['gitRepoServices']);

starredGitRepoApp.controller('GitRepoCtrl', ['$scope', 'GitRepo', function ($scope, GitRepo) {
 $scope.repoName = 'lisandro101';

  $scope.setUserRepo = function() {
    $scope.repositories = GitRepo.query({userName: $scope.repoName});
  }

$scope.setUserRepo();
 
}]);









