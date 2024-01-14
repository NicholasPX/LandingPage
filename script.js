// script.js
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingDiv = document.getElementById('greeting');

    if (hour < 12) {
        greetingDiv.innerText = 'Good Morning!';
        // Add more styling or effects if needed
    } else if (hour < 18) {
        greetingDiv.innerText = 'Good Afternoon!';
        // Add more styling or effects if needed
    } else {
        greetingDiv.innerText = 'Good Evening!';
        // Add more styling or effects if needed
    }
}

// Initial call
updateGreeting();

// Update the greeting every hour
setInterval(updateGreeting, 3600000);
