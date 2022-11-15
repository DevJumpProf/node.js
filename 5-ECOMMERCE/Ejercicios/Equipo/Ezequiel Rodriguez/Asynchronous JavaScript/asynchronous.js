//////// MAL
// function calculateSquare(number, callback){
//     setTimeout( function (){
//         if( typeof number !== 'number'){
//             throw new Error('Argument of type number is expected');
//         }
//         const result = number * number;
//         callback(result);
//     }, 1000);
    
// };

// try {
//     calculateSquare('holaa', function(result){
//         console.log(result);
//     });
// } catch (error) {
//     console.log('Caught error: ' + (error)) 
// };


////////////////////////////

// BIEN
// function calculateSquare(number, callback){
//     setTimeout( function (){
//         if( typeof number !== 'number'){
//             callback (new Error('Argument of type number is expected'));
//             return;
//         }
//         const result = number * number;
//         callback(null, result);
//     }, 1000);
// };

// calculateSquare(5, function (error, result) {
//     if (error !== null) {
//         console.log('Caught ' + String(error));
//     } else {
//         console.log(result);
//     }
// });

////////////////////////////

// SOLUCION DEL CALLBACK HELL
// Ej. callback hell
var fs = require('fs');

var myFile = '/tmp/test';  
fs.readFile(myFile, 'utf8', function(err, txt) {  
    if (err) return console.log(err);
    txt = txt + '\nAppended something!';
    
    fs.writeFile(myFile, txt, function(err) {
        if(err) return console.log(err);
        console.log('Appended text!');
    });
});

// SOLUCION
// - Diseño modular - Nombrar funciones - Declarar funciones al principio
var fs = require ('fs');

function notifyUser(err) {
    if(err) return console.log(err);
    console.log('Appended text!');
}

function appendedText(err, txt) {
    if (err) return console.log(err);

    txt = txt + '\nAppended something!';
    fs.writeFile(myFile, txt, notifyUser);
}


var myFile = '/tmp/test';  
fs.readFile(myFile, 'utf8', appendedText);

// ASYNC AWAIT FUNCTIONS

async function getUser(id) {  
    if (id) {
        return await db.user.byId(id);
    } else {
        throw 'Invalid ID!';
    }
}

try {  
    let user = await getUser(123);
} catch(err) {
    console.error(err);
}