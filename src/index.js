



const content = document.querySelector("#content");

const header = document.createElement("header");
const title = document.createElement("h1");
title.textContent = "Keka's restaurant";

const btns = document.createElement("div");
const homeBtn = dpcument.createElement("button");
const aboutBtn = dpcument.createElement("button");
const contactBtn = dpcument.createElement("button");
homeBtn.textContent = "Home";
aboutBtn.textContent = "About";
contactBtn.textContent = "Contacts";
homeBtn.classList.add("homeBtn");
aboutBtn.classList.add("aboutBtn");
contactBtn.classList.add("aboutBtn");
btns.classList.add("buttons");
btns.appendChild(homeBtn);
btns.appendChild(aboutBtn);
btns.appendChild(contactBtn);
header.appendChild(title);
header.appendChild(btns);
content.appendChild(header);

homeBtn.addEventListener

const main = document.createElement("main");







