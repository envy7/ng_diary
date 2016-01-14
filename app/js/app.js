var todoApp = angular.module('todoApp', ['ngRoute', 'firebase'])
                .constant('FIREBASE_URL', 'https://todoapp7.firebaseIO.com/')


todoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/entries', {
      templateUrl: 'views/entries.html',
      controller: 'EntriesController',
      resolve:{
        currentAuth: function(Authentication){
          return Authentication.requireAuth();
        }
      }
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);