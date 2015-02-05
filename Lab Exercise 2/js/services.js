var gitRepoServices = angular.module('gitRepoServices', ['ngResource']);

gitRepoServices.factory('GitRepo', ['$resource',
  function($resource){
    return $resource('https://api.github.com/users/:userName/starred', {}, {
      query: {method:'GET', params:{userName: 'Lisandro101'}, isArray:true}
    });
  }]);
