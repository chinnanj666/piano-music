// Selecting DOM elements
const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");

// Initial setup
let allKeys = [];
const audio = new Audio(); // Create a new Audio object

// Function to play a tune based on the key
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // Set audio source
    audio.play(); // Play the audio

    // Find the clicked key element and add the active class
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    
    // Remove the active class after 150 ms
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

// Add data-key values to the allKeys array and set up click event listeners
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

// Function to handle volume control
const handleVolume = (e) => {
    audio.volume = e.target.value; // Set audio volume
}

// Function to show or hide keys based on the checkbox
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide")); // Toggle hide class
}

// Function to handle key presses
const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key); // Play tune if key is in allKeys
}

// Event listeners
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
