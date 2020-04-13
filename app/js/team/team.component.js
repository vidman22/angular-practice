angular.
    module('team').
    component('team', {
        templateUrl: 'js/team/team.template.html',
        controller: ['$http', function PhoneListController($http) {
          var self = this;
          $http.get('js/data/providers.json').then(function(response){
            console.log("respons", response.data);
            self.team = response.data.resolver;
          })
        }]
});