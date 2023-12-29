// Hier setzt du die richtigen Antworten
var correctAnswers = {
    question1: "Geocaching",
    question2: "Doom",
    question3: "Nintendo 64",
    question4: "93,75",
    question5: "Secret of Mana"
};

function checkAnswer(questionId) {
    var userAnswer = document.getElementById(questionId).value;
    var correctAnswer = correctAnswers[questionId];

    var feedbackElement = document.getElementById(questionId + "Feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.innerHTML = "Richtig!";
        return true;
    } else {
        feedbackElement.innerHTML = "Leider falsch. Versuche es erneut.";
        return false;
    }
}

function checkAnswers() {
    var allCorrect = true;

    // Überprüfe jede Frage einzeln
    for (var questionId in correctAnswers) {
        if (!checkAnswer(questionId)) {
            allCorrect = false;
        }
    }

    // Gib das Gesamtergebnis aus
    if (allCorrect) {
        document.getElementById("result").innerHTML = "Du hast alle Aufgaben richtig beantwortet!<br> https://drive.google.com/drive/folders/[CODE_VON_GESCHENKKARTE]6PkPoBPjQ6lQJrUvveuF15qMlRBC?usp=sharing";
        // Hier kannst du den Code für das Generieren und Anzeigen des Gutscheins hinzufügen
    } else {
        document.getElementById("result").innerHTML = "Leider sind nicht alle Antworten korrekt. Versuche es erneut!";
    }
}