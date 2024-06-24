document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = document.getElementById('guests').value;

    simulateSearch(destination, checkIn, checkOut, guests);
});

function simulateSearch(destination, checkIn, checkOut, guests) {
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.innerHTML = '<p>Loading...</p>';

    setTimeout(function() {
        const results = generateDummyResults(destination, checkIn, checkOut, guests);
        displayResults(results);
    }, 1500);
}

function generateDummyResults(destination, checkIn, checkOut, guests) {
    
    const flights = [
        { id: 1, name: 'Flight 1', price: '$250' },
        { id: 2, name: 'Flight 2', price: '$300' },
        { id: 3, name: 'Flight 3', price: '$200' }
    ];

    const hotels = [
        { id: 1, name: 'Hotel A', price: '$150' },
        { id: 2, name: 'Hotel B', price: '$180' },
        { id: 3, name: 'Hotel C', price: '$120' }
    ];

    const rentals = [
        { id: 1, name: 'Car Rental X', price: '$50/day' },
        { id: 2, name: 'Car Rental Y', price: '$60/day' },
        { id: 3, name: 'Car Rental Z', price: '$70/day' }
    ];

    return {
        flights,
        hotels,
        rentals
    };
}

function displayResults(results) {
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.innerHTML = ''; 

    const flightsContainer = document.createElement('div');
    flightsContainer.className = 'result-item';
    flightsContainer.innerHTML = '<h3>Flights</h3>';
    results.flights.forEach(flight => {
        const item = document.createElement('div');
        item.innerHTML = `<p>${flight.name} - ${flight.price}</p>`;
        flightsContainer.appendChild(item);
    });
    resultsSection.appendChild(flightsContainer);

    const hotelsContainer = document.createElement('div');
    hotelsContainer.className = 'result-item';
    hotelsContainer.innerHTML = '<h3>Hotels</h3>';
    results.hotels.forEach(hotel => {
        const item = document.createElement('div');
        item.innerHTML = `<p>${hotel.name} - ${hotel.price}</p>`;
        hotelsContainer.appendChild(item);
    });
    resultsSection.appendChild(hotelsContainer);

    const rentalsContainer = document.createElement('div');
    rentalsContainer.className = 'result-item';
    rentalsContainer.innerHTML = '<h3>Rental Cars</h3>';
    results.rentals.forEach(rental => {
        const item = document.createElement('div');
        item.innerHTML = `<p>${rental.name} - ${rental.price}</p>`;
        rentalsContainer.appendChild(item);
    });
    resultsSection.appendChild(rentalsContainer);
}
