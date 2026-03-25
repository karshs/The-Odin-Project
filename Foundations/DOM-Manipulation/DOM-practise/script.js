const container = document.querySelector('#container');

const redpara = document.createElement('p');
redpara.textContent = "Hey I'm red!";
redpara.style.color = 'red';
container.appendChild(redpara);

const bluepara = document.createElement('h3');
bluepara.textContent = "Hey I'm blue! h3";
bluepara.style.color = 'blue';
container.appendChild(bluepara);

const pinkdiv = document.createElement('div');
pinkdiv.style.border = '2px solid orange';
pinkdiv.appendChild(bluepara);

const innerh1 = document.createElement('h1');
innerh1.textContent = " I'm in a div";
pinkdiv.appendChild(innerh1);

const innerpara = document.createElement('p');
innerpara.textContent = "ME TOO!";
pinkdiv.appendChild(innerpara);

container.appendChild(pinkdiv);
