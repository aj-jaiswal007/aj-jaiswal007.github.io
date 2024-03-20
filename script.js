// Typewriter effect for greeting
const greetingText = "Hey there, I'm Amar Jaiswal! ";
const greetingElement = document.getElementById('greeting');
let index = 0;

function typeWriter() {
    if (index < greetingText.length) {
        greetingElement.innerHTML += greetingText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();
