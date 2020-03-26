/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
var section = document.querySelector('.middle');


var requestURL = 'https://raw.githubusercontent.com/KoopReynders/frontendvoordesigners/master/opdracht3/json/movies.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();
console.log(request);

request.onload = function () {
    var jsonObj = request.response;
    showMovie(jsonObj);




};

function showMovie(jsonObj) {
    var info = jsonObj;
    for (var i = 0; i < info.length; i++) {
        var myArticle = document.createElement('article');
        var infoButton = document.createElement('button');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');


        myH2.textContent = info[i].title;
        myPara1.textContent = info[i].genres;
        myPara2.textContent = 'Release: ' + info[i].release_date;
        myPara3.textContent = info[i].plot;
        // myPara4.textContent = info[i].plot;



        myArticle.appendChild(infoButton);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);




        section.appendChild(myArticle);

        infoButton.onclick = function () {
            console.log(this);
            this.parentElement.classList.toggle('active');




        };

    }



}
