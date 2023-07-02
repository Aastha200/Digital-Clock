function updateClock() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    var date = now.toLocaleDateString();

    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = date;
  }

  // Start button event listener
  document.getElementById("startBtn").addEventListener("click", function() {
    // Update the clock immediately and every second
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
  });

  // Stop button event listener
  document.getElementById("stopBtn").addEventListener("click", function() {
    // Stop updating the clock
    clearInterval(clockInterval);
  });