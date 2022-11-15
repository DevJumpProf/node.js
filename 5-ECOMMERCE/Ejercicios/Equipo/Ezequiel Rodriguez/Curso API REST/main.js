// console.log("Hello World");
const url = "https://dog.ceo/api/breeds/image/random"

fetch(url)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data.message;
    })