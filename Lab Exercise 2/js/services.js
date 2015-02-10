var gitRepoServices = angular.module('gitRepoServices', ['ngResource']);

gitRepoServices.factory('GitRepo', ['$resource',
  function($resource){
    return $resource('https://api.github.com/users/:userName/starred', {}, {
      query: {method:'GET', params:{username:'c46232121f688f28d749e9b8a5ae852151563e75', password:'', auth: 'basic'}, isArray:true}
    });
  }]);

gitRepoServices.factory('GitRepoStatistics', ['$resource',
  function($resource){
    return $resource('https://api.github.com/repos/:owner/:repo/commits', {}, {
      query: {method:'GET', params:{username:'c46232121f688f28d749e9b8a5ae852151563e75', password:'', auth: 'basic'}, isArray:true}
    });
  }]);

