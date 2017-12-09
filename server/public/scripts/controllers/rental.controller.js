app.controller('RentalController', ['RentalService', function (RentalService) {
    var self = this;

    console.log('In controller');

    self.rental = RentalService.rental
    RentalService.getRental();
    self.addNewRental = RentalService.addNewRental;
        
}])