const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

// I changed this to match your later lines
const blackPinkDiv = document.createElement("div");
blackPinkDiv.style.border = "1px solid black";
blackPinkDiv.style.backgroundColor = "pink";

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";

const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";

// Now these match the variable name above
blackPinkDiv.appendChild(divH1);
blackPinkDiv.appendChild(divPara);

container.appendChild(blackPinkDiv);