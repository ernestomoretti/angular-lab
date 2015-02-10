var starredGitRepoControllers = angular.module('starredGitRepoControllers', []);


starredGitRepoControllers.controller('LoginCtrl', function($scope, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  });

starredGitRepoControllers.controller('GitRepoCtrl', ['$scope', 'GitRepo', 'GitRepoStatistics', '$auth', function ($scope, GitRepo, GitRepoStatistics, $auth) {
  
 $scope.handleBtnClick = function() {
};

  $scope.repoName = 'lisandro101';
  $scope.orderProp = 'name';
  $scope.searchFilter = '';
  
  $scope.setUserRepo = function() {
    $scope.repositories = GitRepo.query({userName: $scope.repoName}, function(results){
    angular.forEach(results, function(repo, key) 
     {
      //  GitRepoStatistics.query({owner: $scope.repoName, repo: repo.name}),function(statistics){
      //  repo.contributors = statistics;
     	//  };
	     repo.contributors = 'Titi';
     });

    })
  };   
  $scope.setUserRepo();
}]);

starredGitRepoControllers.controller('RepositoryDetailCtrl', ['$scope', '$routeParams', 
  function($scope, $routeParams) {
    $scope.repository =  $routeParams.repoName;
    }
]);
