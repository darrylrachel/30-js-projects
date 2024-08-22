const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "Father", "Disc Golfer"];

let careerIndex = 0;

let charaterIndex = 0;

updateText();

function updateText() {
  charaterIndex++;
  containerEl.innerHTML = `
  <h1>I am a <span id="me">
  ${careers[careerIndex].slice(0, charaterIndex)}
  </span></h1>
`;

if (charaterIndex === careers[careerIndex].length) {
  careerIndex++
  charaterIndex = 0
}
if (careerIndex === careers.length) {
  careerIndex = 0;
}
setTimeout(updateText, 200);
}

