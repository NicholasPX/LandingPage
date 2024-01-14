// script.js
function updateGreetingAndBackground() {
    const hour = new Date().getHours();
    const body = document.body;
    const greetingDiv = document.getElementById('greeting');

    if (hour < 12) {
        greetingDiv.innerText = 'Good Morning!';
        body.className = 'morning';
    } else if (hour < 18) {
        greetingDiv.innerText = 'Good Afternoon!';
        body.className = 'afternoon';
    } else {
        greetingDiv.innerText = 'Good Evening!';
        body.className = 'evening';
    }
}

// Initial call
updateGreetingAndBackground();

// Update the greeting and background
