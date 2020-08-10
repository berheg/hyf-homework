function bookPlaneTickets() {
    console.log('Plane tickets booked');
    requestVacationDays();
}

 function bookHotel() {
    console.log('Hotel booked');
    planItinerary();
}

async function requestVacationDays() {
  setTimeout(console.log('Vacation days requested'), 3000);
}

function planItinerary() {
    console.log('Itinerary done');
}

function planTrip() {
    bookPlaneTickets();
    bookHotel();
    console.log('Trip planned');
}
planTrip();
