// Inputs
const beds = 1;
// const dates = [[1, 3], [1, 2], [2, 3], [3, 4]]; // Sorted: [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 3, 4 ] ]
const dates = [[1, 3], [1, 2], [7, 10], [3, 6], [5, 8]];

class Bed {
  constructor(checkOutDate) {
    this.availableFrom = checkOutDate;
  }
  updateCheckoutDate = (dates) => {
    this.availableFrom = dates[1];
  }
}

class Hotel {
  constructor(beds, guestsDates) {
    // sorted by check-out date
    this.guestsDates = guestsDates.sort((a, b) => a[1] - b[1]);
    this.hostedGuests = 0;
    this.beds = this.initializeBeds(beds);
  }
  // Book first X guests for Y beds as defined by input
  initializeBeds = beds => {
    const bedsArray = [];
    for (let i = 0; i < beds; i++) {
      bedsArray.push(new Bed(this.guestsDates[i][1]));
      this.guestsDates.shift();
      this.hostedGuests++;
    }
    return bedsArray;
  }
  maximizeBookings = () => {
    while (this.guestsDates.length > 0) {
      const checkInCheckOut = this.guestsDates.shift();
      for (let bed of this.beds) {
        if (checkInCheckOut[0] >= bed.availableFrom) {
          bed.updateCheckoutDate(checkInCheckOut);
          this.hostedGuests++;
          break;
        }
      }
    }
  }
}

const hotel = new Hotel(beds, dates);
hotel.maximizeBookings();
// Output: # of hosted guests
console.log(hotel.hostedGuests);