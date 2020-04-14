/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var section = document.querySelector('.middle');

//code of movies te laten zien na het klikken van het knopje "all"
var laatzien = document.querySelector(".showme");
laatzien.addEventListener("click", function showMovie() {
    section.innerHTML = "";
    loadContent();
});

/*var laatCrimezien = document.querySelector(".crime");
laatCrimezien.addEventListener("click", function showCrime() {
    section.innerHTML = "";
    loadContent();
});

*/


var requestURL = 'https://raw.githubusercontent.com/KoopReynders/frontendvoordesigners/master/opdracht3/json/movies.json';

function loadContent() {
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();
    console.log(request);

    request.onload = function () {
        var jsonObj = request.response;
        showMovie(jsonObj);


    };
}

function showMovie(jsonObj) {
    var info = jsonObj;
    for (var i = 0; i < info.length; i++) {
        var myArticle = document.createElement('article');
        var infoButton = document.createElement('button');
        var myH2 = document.createElement('h2');
        var myCover = document.createElement('img');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        // code below from stackoverflow modified to fit my code
        //    https://stackoverflow.com/questions/42143031/filter-json-by-key-value





        //end of stackoverflow code

        myH2.textContent = info[i].title;
        myCover.src = info[i].cover;
        myPara1.textContent = info[i].genres;
        myPara2.textContent = 'Release: ' + info[i].release_date;
        myPara3.textContent = info[i].plot;
        // myPara4.textContent = info[i].plot;




        myArticle.appendChild(infoButton);
        myArticle.appendChild(myCover);

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);




        section.appendChild(myArticle);

        infoButton.onclick = function () {
            console.log(this);
            this.parentElement.classList.toggle('active');

            infoButton.onclick = function () {
                console.log(this);
                this.parentElement.classList.toggle('showittoo');



            };

        };




    }


}




// code of theme van de pagina te veranderen
var icon = document.querySelector(".theme");
icon.addEventListener("click", function () {
    icon.classList.toggle("night");
});

var change = document.querySelector(".theme");
var theme = document.querySelector("html");
change.addEventListener("click", function () {
    theme.classList.toggle("day");
});

// clicks on arrowUp and arrowDown will change the theme 
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        icon.click();

    }
    if (e.keyCode == 40) {
        change.click();
    }

    if (e.keyCode == 50)
        first.click();

    if (e.keyCode == 51)
        first.click();
};



var first = document.querySelector(".col");
var element = document.querySelector(".middle");
first.addEventListener("click", function () {
    element.classList.toggle("changeme");

});

var three = document.querySelector(".col");
three.addEventListener("click", function () {
    three.classList.toggle("two");
});

/* document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector(".middle").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector(".middle").style.visibility = "visible"; 
    } 
}; */
