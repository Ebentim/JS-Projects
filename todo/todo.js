
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const body = document.querySelector("body");
const headgear = document.querySelector(".headgear");

// the events

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

// add a todo event
const todo_main = document.querySelector(".todo_main");
const input_main = document.querySelector(".input_main");
const text = document.querySelector("input");
const plus = document.querySelector(".plus");
const main = document.querySelector("main");
let counter = 0;
plus.addEventListener("click", () => {
    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "textrow");
    let sn = document.createElement("p");
    sn.classList.add("eachCounts");
    sn.classList.add("plus")
    counter +=1
    sn.innerHTML= counter;
    textDiv.appendChild(sn);

    let textInput = document.createElement("p");
    textInput.classList.add("myListText");
    textInput.innerHTML = text.value;
    textInput.style.textAlign = "left"
    textDiv.appendChild(textInput);

    let del = document.createElement("button");
    del.classList.add("plus");
    del.classList.add("plusbody")
    del.innerHTML = "&times;";
    textDiv.appendChild(del);
    
    main.appendChild(textDiv)
    // clears the input box.
    
    // main container does not display if the text field is empty
    if (text.value === ""){
        textDiv.style.display = "none";
        alert("The text box cannot be empty")
        counter-=1;
        return;
    }else{
        main.style.display = "block"
    }
    text.value = ""
    main.style.display = "block"
    del.addEventListener("click", () =>{
        deltextDiv = main.removeChild(textDiv);
    });
});