angular.
  module('app').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/our-team', {
          template: '<team></team>'
        }).
        when('/our-team/:pcpID', {
          template: '<profile></profile>'
        }).
        otherwise('/our-team');
    }
  ]);