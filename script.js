    let stopwatch1Value = 0;
    let stopwatch2Value = 0;
    let interval1, interval2;
    let isPaused = true;

    const stopwatch1Element = document.getElementById("stopwatch1");
    const stopwatch2Element = document.getElementById("stopwatch2");

    function startStopwatches() {
        if(isPaused) {
            interval1 = setInterval(updateStopwatches, 100);
            isPaused = false;
        }
    }

    function updateStopwatches() {
        if (!isPaused) {
            stopwatch1Value += 0.1;
            stopwatch1Element.textContent = stopwatch1Value.toFixed(2);

            stopwatch2Value = stopwatch1Value / 2
            stopwatch2Element.textContent = stopwatch2Value.toFixed(2);
        }
    }

    function onBreak() {
        if (!isPaused && stopwatch2Value > 0) {
            stopwatch2Value -= 0.1; // Decrement the break watch
            if(stopwatch2Value > 0){
                stopwatch2Element.textContent = stopwatch2Value.toFixed(2);
            }
        }
    }

    function pauseStopwatches() {
        clearInterval(interval1);
        clearInterval(interval2);
        isPaused = true;
    }

    function takeBreak() {
        if (isPaused) {
            stopwatch1Value = 0; // Reset stopwatch 1
            stopwatch1Element.textContent = stopwatch1Value.toFixed(2);
            isPaused = false
            interval2 = setInterval(onBreak, 100);
        }
    }

    document.getElementById("startButton").addEventListener("click", startStopwatches);
    document.getElementById("pauseButton").addEventListener("click", pauseStopwatches);
    document.getElementById("breakButton").addEventListener("click", takeBreak);