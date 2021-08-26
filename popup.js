// When the button is clicked, inject setPageBackgroundColor into current page
const pullData = document.getElementById("fetchEvents");
pullData.addEventListener("click", () => {
  const textbox = document.querySelector(".container");

  fetch("https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/08/26")
    .then((data) => data.json())
    .then((data) => {
      data['events'].forEach(element => createMessage(element, textbox));
    });
});

function createMessage(message, body) {
  const newEvent = document.createElement("p");
  newEvent.className = "event";
  newEvent.innerText = message.text;
  body.appendChild(newEvent);
}