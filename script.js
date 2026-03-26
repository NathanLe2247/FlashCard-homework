const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById("card-content")
    const card = flashcards[currentIndex % flashcards.length]

    if (showingTerm) {
        cardContent.innerText = card.term
    } else {
        cardContent.innerText = card.definition
    }
}

document.getElementById("next-btn").addEventListener('click', () => {
    currentIndex += 1
    displayCard()
})

document.getElementById("prev-btn").addEventListener('click', () => {
    while (currentIndex <= 0)
        currentIndex += flashcards.length

    currentIndex -= 1
    displayCard()
})

document.getElementById("add-card-btn").addEventListener('click', () => {
    const termInput = document.getElementById("new-term")
    const defInput = document.getElementById("new-definition")

    flashcards.push({
        term: termInput.value,
        definition: defInput.value
    });

    termInput.value = ""
    defInput.value = ""
})




document.getElementById("flashcard").addEventListener('click', () => {
    showingTerm = !showingTerm;
    displayCard()
});

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;