const screen = document.getElementById("screen");
function input(val){
  screen.value += val;
};

const clear = document.getElementById("cleared");
clear.addEventListener("click", () =>{
  screen.value = ''
  console.log(screen.value);
});
function cal(){
  try {
    screen.value = eval(screen.value);
  } catch{
    screen.value = "input error"
  }
}
