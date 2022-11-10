console.log("Hello World");
const URL = 'https://api.thedogapi.com/v1/images/search'


fetch(URL)
 .then( res => res.json())
 .then(data /* todo lo q viene de la API*/ => {
    const img = document.querySelector('img');
     img.src = data[0].url;
})