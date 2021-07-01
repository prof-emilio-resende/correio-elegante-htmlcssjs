var messages = [
    "A vida trará coisas boas se tiveres paciência.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você."
];

var index = 0;
function pickMessage() {
    if (index === 3) {
        index = 0;
    } else {
        index = index + 1;
    }

    return messages[index];
}

function updateMessage() {
    document.querySelector("p").innerHTML = pickMessage();
}

window.onload = function () {
    document
        .querySelector("button")
        .addEventListener("click", updateMessage);
}
