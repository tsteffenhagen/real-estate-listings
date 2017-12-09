app.service('RentalService', ['$http', function ($http) {
    var self = this;

    self.rental = { list: [] };

    self.getRental = function () {

        $http({
            method: 'GET',
            url: '/rental'
        }).then(function (response) {
            console.log('response', response);
            self.rental.list = response.data;
        })
    }

    self.addNewRental = function (newRental) {
        console.log('rental',newRental);

        $http({
            method: 'POST',
            url: '/rental',
            data: newRental
        }).then(function (response) {
            console.log('response', response);
            self.getRental();
            newRental.rent = '';
            newRental.sqft = '';
            newRental.city = '';

        })
    }
}]);
