/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/* buttons */ 
// to watch
var first= document.querySelectorAll("button")[0];
var element = document.querySelectorAll("svg")[0];
first.addEventListener("click", function() {
  element.classList.toggle("clicked");
});

// here im showing the details - disabled bc i used type numbers and not classes.
// 

 var orange= document.querySelectorAll("h4")[2];
var detail = document.querySelectorAll("div")[0];
orange.addEventListener("click", function() {
  detail.classList.toggle("zien");
});
/*
var purple= document.querySelectorAll("h4")[3];
var info = document.querySelectorAll("article")[7];
purple.addEventListener("click", function() {
  info.classList.toggle("show2");
});*/

// list items and selected state
var second= document.querySelectorAll("button")[1];
var thing = document.querySelectorAll("svg")[1];
second.addEventListener("click", function() {
  thing.classList.toggle("clicked1");
});

var third= document.querySelectorAll("button")[2];
var object = document.querySelectorAll("svg")[2];
third.addEventListener("click", function() {
  object.classList.toggle("clicked2");
});

var list= document.querySelectorAll("button")[0];
var uno = document.querySelectorAll("li")[8];
list.addEventListener("click", function() {
  uno.classList.toggle("showmeorange");
});

var lijst= document.querySelectorAll("button")[1];
var dos = document.querySelectorAll("li")[9];
lijst.addEventListener("click", function() {
  dos.classList.toggle("showmepurple");
});

var lista= document.querySelectorAll("button")[2];
var tres = document.querySelectorAll("li")[10];
lista.addEventListener("click", function() {
  tres.classList.toggle("showmeyellow");
});

/* draggable */ 
/* var dragged;

 events fired on the draggable target 
document.addEventListener("drag", function() {

}, false);

document.addEventListener("dragstart", function() {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = 0.5;
}, false);

document.addEventListener("dragend", function() {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

events fired on the drop targets 
document.addEventListener("dragover", function() {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function() {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function() {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function() {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


var hide = document.querySelectorAll("article")[0];
var detail = document.querySelectorAll("hidden");
hide.addEventListener("click", function () {
    detail.classList.toggle("show");
});

var see = document.querySelectorAll("button")[1];
var element = document.querySelector("aside");
see.addEventListener("click", function () {
    element.classList.toggle("show");

});

var like = document.querySelector("svg");
var liked = document.querySelector("svg");
like.addEventListener("click", function () {
    liked.classList.toggle("clicked");
}); */





/* var gone = document.querySelectorAll("button")[1];

var alex = document.querySelectorAll("article")[0];
gone.addEventListener("click", function () {
    alex.classList.toggle("cant");
}); */
