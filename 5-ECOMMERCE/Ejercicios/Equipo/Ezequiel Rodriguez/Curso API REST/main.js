console.log("Hello World");

const url = "https://www.amiiboapi.com/api/amiibo/?name=mario";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].image;
    })