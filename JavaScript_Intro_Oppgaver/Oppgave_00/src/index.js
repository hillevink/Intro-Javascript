// Oppgave 1
const textRemove = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", () => {
  textRemove.innerHTML = null;
});

// Oppgave 2
const textChange = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  textChange.innerHTML = "＼（〇_ｏ）／";
});

// Oppgave 3
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

input.addEventListener("keyup", (event) => {
  inputText.innerHTML = event.target.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const listBtn = document.getElementById("write-list");
const ul = document.getElementById("ul");

listBtn.addEventListener("click", () => {
  myList.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  });
});

// Oppgave 5
const dropDown = document.getElementById("select");
const text = document.getElementById("text");
const createBtn = document.getElementById("create");
const placeText = document.getElementById("placeholder");

createBtn.addEventListener("click", () => {
  const htmlType = dropDown.value;
  const newText = text.value;
  placeText.innerHTML += `<${htmlType}>${newText}</${htmlType}>`
});

// Oppgave 6
const removeLiBtn = document.getElementById("remove-li");
const ulList = document.getElementById("list");

removeLiBtn.addEventListener("click", () => {
  const firstLi = ulList.querySelector("li:first-child")
  ulList.removeChild(firstLi);
});
  
// Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

orderBtn.addEventListener("click", () => {
const nameText = inputName.value;
  if (nameText.length > 4) {
    orderBtn.style.borderColor = "red";
  } else {
    orderBtn.style.borderColor = null;
  }
});

// Oppgave 8
const ulChildren = document.querySelector(".children");
const colorBtn = document.getElementById("color");
const liChildren = ulChildren.querySelectorAll("li")

colorBtn.addEventListener("click", () => {
  Array.from(liChildren).forEach((child, i) => {
    if ((i + 1) % 2===0) {
      child.style = "border: solid pink"
    } else {
      child.style = "border: solid green"
    }
  })
});
