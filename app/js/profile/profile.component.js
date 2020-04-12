angular.
  module('profile').
  component('profile', {
    templateUrl: 'js/profile/profile.template.html',
    controller: ['$routeParams', '$http',
      function ProfileController($routeParams, $http) {
        var self = this;
        var pcpID = $routeParams.pcpID;
        $http.get('js/data/providers.json').then(function(response){
          const finalArray = response.data.resolver;
          self.bio = finalArray[pcpID].bio;
          self.image = finalArray[pcpID].image;
        })
      }
    ],
  });