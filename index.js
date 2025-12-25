"use strict";
var randoName= `harsh`;
console.log(`Hello ${randoName}!`);
let x= 10;
console.log(x);
let y= 10;
let z= ++x;
let a= y++;
let b= y;
console.log(`git is doing new shit`);
console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);
const badString =  String;
console.log(typeof badString);
console.log(badString("hello"));
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
const button = document.getElementById("Greet");
function Clicked(){
    const name = prompt("What is your name?");
    if(name!="Harsh"){
        alert("You are not Harsh!");
    }
    const div = document.getElementById("hello");
    div.innerHTML = `Hello,${name}! <br> what is your favourite song? <br> <input type="text" id="songInput"> <button id="songButton">Submit</button>`;
}
button.addEventListener("click", Clicked);
let str = `this is the test of backtics \n alclajdflaf adlfkjadfkaf asdlfkjasdflk`;
console.log(str[0]);
console.log(str);
console.log(str.slice(0,4));
const Song= document.getElementById("songButton");
function songSubmitted(){
    const songInput = document.getElementById("songInput").value;
    const songDiv = document.getElementsByClassName("songfromInput")[0];
    songDiv.innerHTML = `Your favourite song is: ${songInput} got ya bro.`;
};
Song.addEventListener("click", songSubmitted);

