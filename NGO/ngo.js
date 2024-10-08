document.getElementById('menuBtn').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');  // Toggle the 'active' class to show/hide the menu
});

// Get the popup, open button, and close button elements
var popup = document.getElementById('popup');
var openPopupBtn = document.getElementById('openPopupBtn');
var closePopupBtn = document.getElementById('closePopupBtn');

// When the open button is clicked, show the popup
openPopupBtn.addEventListener('click', function() {
    popup.style.display = 'flex';  // Use flex to center the popup
});

// When the close button is clicked, hide the popup
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});



document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting by default

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cvv = document.getElementById('cvv').value;

    if (name === "" || email === "" || amount <= 0 || cardNumber.length !== 16 || cvv.length !== 3) {
        alert("Please fill out all fields correctly.");
    } else {
        alert("Donation successful! Thank you for your generosity.");
        // After successful validation, you can send the data to the server or handle payment processing here
    }
});


// Get the donate button and input elements
const donateBtn = document.getElementById('donateBtn');
const customAmountInput = document.getElementById('customAmount');
const donationButtons = document.querySelectorAll('.donation-btn');

// Variable to store the selected amount
let selectedAmount = 0;

// Add event listener to each predefined donation button
donationButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectedAmount = this.getAttribute('data-amount'); // Get the data-amount value
        customAmountInput.value = '';  // Clear custom input when a predefined amount is selected
        console.log(`Selected amount: $${selectedAmount}`);
    });
});

// Add event listener to the donate button
donateBtn.addEventListener('click', function() {
    // Check if a custom amount is entered
    let customAmount = customAmountInput.value;
    if (customAmount) {
        selectedAmount = customAmount;
    }

    // Show an alert with the donation amount
    if (selectedAmount > 0) {
        alert(`Thank you for donating $${selectedAmount}!`);
    } else {
        alert('Please select or enter a valid donation amount.');
    }
});


// Get the context of the canvas
const ctx = document.getElementById('donationChart').getContext('2d');

// Sample data for donation progress (e.g., in percentage or amounts)
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Donations in USD',
        data: [500, 1500, 3000, 2000, 3500, 4000], // Example donation amounts
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: true
    }]
};

// Chart configuration
const config = {
    type: 'line', // You can change this to 'bar' or 'pie'
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Create the chart
new Chart(ctx, config);
