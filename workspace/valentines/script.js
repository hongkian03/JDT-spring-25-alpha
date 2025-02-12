const messages = [
    "Are you sure?",
    "Really sure?",
    "Pookie Please?",
    "I'm going to cry... :(",
    "You're breaking my heart!",
    "REALLY sure?",
    "please?",
    "pretty please?",
    "PLEASE?",
    "PRETTY PLEASE?",
    "PLEASE PLEASE PLEASE?",
    "PLEASE PLEASE PLEASE PLEASE PL",
    "stop",
    "STOP",
    ":(",
    ":( :(",
    ":( :( :(",
    "I'm sad now",
    "No",
    "No",
    "No",
    "No",
 ];
 
let currentMessageIndex = 0;

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let yesScale = 1;
let noScale = 1;

// access each element and inject attributes/properties
yesButton.addEventListener("click", () => {
    // change the image
    document.getElementById("joe").src = "data:image/jpeg;base64,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";

    // change the text of the yes button
    yesButton.textContent = "Noice!";

    // hide the no button
    noButton.style.display = "none";

    // make the yes button big
    yesButton.style.transform = "scale(1.6)";
})

noButton.addEventListener("click", () => {
    // increase size of yes button
    yesScale += 0.1;
    yesButton.style.transform = `scale(${yesScale})`;

    // decrease size of no button
    noScale -= 0.1;
    noButton.style.transform = `scale(${noScale})`;

    // teleport no button to random location
    teleportButton(noButton);

    // update text of no button to next message
    noButton.textContent = messages[currentMessageIndex];

    // increment currentMessageIndex, reset to 0 if end reached
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
})

function teleportButton(button) {
    // get screen dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // get card element
    const card = document.querySelector(".card");

    // get card position and size
    const cardRect = card.getBoundingClientRect();

    // padding is needed to keep button within the screen and away from the card
    const padding = 20;

    // calculate boundaries
    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;

    // ensure button does not overlap with card
    let randomX, randomY;
    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while (
        // check if button overlaps with card
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );

    // apply the style
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}