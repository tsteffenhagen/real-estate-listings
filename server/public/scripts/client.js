var app = angular.module('RealEstateApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/listing', {
        templateUrl: '/views/listing.html',
        controller: 'ListingController as vm'
    }).when('/rental', {
        templateUrl: '/views/rental.html',
        controller: 'RentalController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
