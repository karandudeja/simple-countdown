// Set the date and time for the countdown
const countdownDate = new Date("June 16, 2024 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the "timer" div
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "EXPIRED";
    }
}, 1000); // Update every second