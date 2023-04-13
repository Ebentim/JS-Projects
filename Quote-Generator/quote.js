  const quotes = ["If it is possible for any other man, it is possible for you too. - Marcus Aurelius",
    "The best revenge is not to do like them. - Marcus Aurelius",
    "The end of all things as we know it is near. Man is at the edge of an abyss. - Billy Graham",
    "God is not wicked, man is just ungrateful. - Obafemi Samuel",
    "A wrong doer is often the man who has left something undone and not the one who has done something. - Marcus Aurelius",
    "Sickness is a problem for the body not the mind - unless the mind decides that it is a problem. lameness, too, is the body's problem, not the mind's. Say this to yourself whatever the circumstance, you will find without fail, that the problem pertains to something else, not to you ~ Epictetus",
    "What we cannot bear removes us from life; what remains can be borne ~ Marcus Aurelius",
    "Swiftly the remembrance of all things is buried in the gulf of eternity ~ Marcus Aurelius",
    "To live happily is an inward power of the soul ~ Marcus Aurelius",
    "Circumstances don't make the name, they only reveal him to himself ~ Marcus Aurelius"];
const next = document.querySelector(".right");
const prev = document.querySelector(".left");
const display = document.querySelector(".display");

const click = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  display.textContent = quote;
  prev.style.backgroundColor = "#b69965"
  next.style.backgroundColor = `#0c770c`
  display.style.fontWeight = "bold"
};
next.addEventListener("click", click);

const prevClick = () => {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  display.textContent = quote;
  display.style.fontWeight = "bold";
  prev.style.backgroundColor = "#0c770c";
  next.style.backgroundColor = "#b69965"
}
prev.addEventListener("click", prevClick);
