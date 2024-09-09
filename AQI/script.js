// Initialize the map and set its view to New York's coordinates
var map = L.map('map').setView([40.7128, -74.0060], 12); // New York coordinates

// Add the tile layer from OpenStreetMap (or other providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Optional: Add a marker for New York
var marker = L.marker([40.7128, -74.0060]).addTo(map);
marker.bindPopup("<b>New York City</b><br>Air Quality: 20 AQI").openPopup();

// Chart.js for the forecast chart
const ctx = document.getElementById('forecastChart').getContext('2d');

const forecastChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['04:00', '06:00', '08:00', '10:00', '12:00'],
        datasets: [{
            label: 'PM2.5',
            data: [11.29, 12.00, 11.50, 10.80, 11.00],
            borderColor: 'rgba(74, 144, 226, 1)',
            backgroundColor: 'rgba(74, 144, 226, 0.2)',
            fill: true,
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: false,
            },
            y: {
                beginAtZero: true,
            }
        }
    }
});
