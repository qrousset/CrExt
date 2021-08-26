// When the button is clicked, inject setPageBackgroundColor into current page
const pullData = document.getElementById("fetchEvents");
pullData.addEventListener("click", () => {
  const textbox = document.querySelector(".container");
  const today = new Date();
  let mm = today.getMonth()+1;
  let dd = today.getDate();
  if(dd<10) 
  {
    dd='0'+dd;
  } 
  if(mm<10) 
  {
    mm='0'+mm;
  } 

  fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/${mm}/${dd}`)
    .then((data) => data.json())
    .then((data) => {
      data['events'].forEach(element => createMessage(element, textbox));
    });
});

function createMessage(message, body) {
  const newEvent = document.createElement("p");
  newEvent.className = "event";
  newEvent.innerHTML = `<a target = "_blank" href=${message['pages']['0']['content_urls']['desktop']['page']}> ${message.year}: ${message.text} </a>`;
  body.appendChild(newEvent);
}