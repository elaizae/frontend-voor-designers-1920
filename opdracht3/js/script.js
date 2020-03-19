/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
document.querySelector("body > section:nth-child(2) > div > form > div.search.my-3 > button");

let requestURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

let request = new
XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const makeUp =
        request.response;
    showProducts(makeUp);
}


function showProducts(jsonObj) {
    const everything = jsonObj['products'];


    for (let i = 0; i < everything.length; i++) {

        const myArticle = document.createElement('article');

        const myImg = document.createElement('img');
        const myH2 = document.createElement('h2');
        const discription = document.createElement('p');




        myH2.textContent = everything[i].name;
        discription.textContent = 'Discription: ' + everything[i].discription;
        myImg.textContent = everything[i].image_link;


        myArticle.appendChild(myH2);
        myArticle.appendChild(discription);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }
}
