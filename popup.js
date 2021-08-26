// When the button is clicked, inject setPageBackgroundColor into current page
const pullData = document.getElementById('fetch Events')
pullData.addEventListener("click", async () => {

  const textbox = document.querySelector('.main')
  fetch('https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/08/25')
  .then((data) => data.json())
  .then((data) => {
    console.log(data)
  })
});