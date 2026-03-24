const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

const flashcard = document.getElementById("flashcard")

const addCardButton = document.getElementById("add-card-btn")

const previousButton = document.getElementById("prev-btn")
const nextButton = document.getElementById("next-btn")


// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

displayCard();

// Start with this function to simply display the card
// This block shows the definition of the term when we click on the flashcard

flashcard.addEventListener("click", () => {
    showingTerm = !showingTerm;
    displayCard();
});

function displayCard() {    
    const card = flashcards[currentIndex];

    if (showingTerm) {
        document.getElementById("card-content").innerHTML = `<h2>${card.term}</h2>`;
    }
    else {
        document.getElementById("card-content").innerHTML = `<p>${card.definition}</p>`;
    }   
}


// this block adds a new card to our array flashcards
addCardButton.addEventListener("click", () => addCard());

function addCard() {
    const newTerm = document.getElementById("new-term").value;
    const newDefinition = document.getElementById("new-definition").value;

    flashcards.push({term: newTerm, definition: newDefinition});

    document.getElementById("new-term").value = "";
    document.getElementById("new-definition").value = "";
}

// this block moves to the next or previous card

previousButton.addEventListener("click", () => previousCard());
nextButton.addEventListener("click", () => nextCard());

function previousCard() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }
    displayCard();
}

function nextCard() {
    currentIndex++;
    
    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }
    displayCard();
}

// This line will display the card when the page is refreshed
window.onload = displayCard;
