app.service('ListingService', ['$http', function ($http) {
    var self = this;

    self.listing = { list: [] };

    self.getListing = function () {

        $http({
            method: 'GET',
            url: '/listing'
        }).then(function (response) {
            console.log('response', response);
            self.listing.list = response.data;
        })
    }

    self.addNewListing = function (newListing) {
        console.log('listing',newListing);

        $http({
            method: 'POST',
            url: '/listing',
            data: newListing
        }).then(function (response) {
            console.log('response', response);
            self.getListing();
            newListing.cost = '';
            newListing.sqft = '';
            newListing.city = '';

        })
    }

}]);
