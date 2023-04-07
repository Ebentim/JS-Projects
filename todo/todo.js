const night = document.querySelector(".night");
const light = document.querySelector(".light");
const body = document.querySelector("body");
const headgear = document.querySelector(".headgear");
const plus = document.querySelector(".plus");

night.addEventListener("click", () =>{
    night.style.display = "none";
    light.style.display = "flex";
    body.style.backgroundColor = "#000";
});

light.addEventListener("click", () => {
    light.style.display = "none";
    night.style.display = "flex"
    body.style.backgroundColor = "#f9f9f9";
    night.style.display = "#flex";
});
plus.addEventListener("click", () => {
    let input = document.querySelector("input");
    let main = document.querySelector("main");
    let div = document.createElement("div");
    div.setAttribute("class", "list_container");
    let textField = document.createElement("p");
    textField.setAttribute("class", "todoText");
    textField.innerHTML = input.value;
    div.appendChild(textField);
    main.appendChild(div);
    main.style.display = "block";
    textField.style.color = "#f9f9f9"
});