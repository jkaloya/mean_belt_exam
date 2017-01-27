var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'loginController',
        templateUrl: "partials/login.html"
    })
    .when("/dashboard", {
        controller: 'dashboardController',
        templateUrl: "partials/dashboard.html"
    })
    .when('/create', {
      templateUrl: 'partials/new.html',
      controller: 'newController',
    })
    .when('/poll/:id', {
      templateUrl: 'partials/show.html',
      controller: 'showController',
    })
    .otherwise('/', {
        controller: 'loginController',
        templateUrl: "partials/login.html"
    })
});
