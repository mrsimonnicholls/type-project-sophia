const parts = [
  { id: "part1", text: "GO" },
  { id: "part2", text: "TO" },
  { id: "part3", text: "THE STUMP" }
];

function startTypewriterAnimation() {
  let index = 0;

  function nextPart() {
    if (index >= parts.length) return;

    const container = document.getElementById(parts[index].id);
    const img = container.querySelector("img");

    // Step 1: Remove image
    if (img) {
      container.removeChild(img);
    }

    // Step 2: Create typewriter effect
    let i = 0;
    const span = document.createElement("span");
    span.className = "typed-text";
    container.appendChild(span);

    function typeLetter() {
      if (i < parts[index].text.length) {
        span.textContent += parts[index].text[i];
        i++;
        setTimeout(typeLetter, 100);
      } else {
        index++;
        setTimeout(nextPart, 400);
      }
    }

    typeLetter();
  }

  nextPart();
}
