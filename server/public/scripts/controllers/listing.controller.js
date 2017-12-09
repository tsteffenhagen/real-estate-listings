app.controller('ListingController', ['ListingService', function (ListingService) {
    var self = this;

    console.log('In controller');

    self.listing = ListingService.listing
    ListingService.getListing();
    self.addNewListing = ListingService.addNewListing;
        
}])
