import {
    wordFetcher
} from "./wordReq"

const fetch = require('node-fetch');

export const getPoem = async() => {
    
    let modalOn = false
    let authOn = false
    const authorDiv = document.getElementById('authorDiv');
    const poemH = document.getElementById('poemH');
    const app = document.getElementById('app');
    let poemUl = document.getElementById('poemUl');
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modalText");
    let wordModal = document.getElementById("wordModal");
    let poemDiv = document.getElementById("poemDiv");
    let leftArrow = document.getElementById("leftArrow");
    let rightArrow = document.getElementById("rightArrow");
    let author = document.getElementById("authorDiv")
    modalText.innerText = ''
    const fetchTitles = await fetch("https://thundercomb-poetry-db-v1.p.rapidapi.com/title", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "thundercomb-poetry-db-v1.p.rapidapi.com",
            "x-rapidapi-key": "08fdd563dcmshc0ae5fec65e6b78p1160efjsn196e12f76f1b"
        }
        });


    const titlesArr = await fetchTitles.json();
    const titles = titlesArr.titles;
    let poemName = titles[Math.floor(Math.random() * titles.length)];
    const fetchPoem = await fetch(`https://thundercomb-poetry-db-v1.p.rapidapi.com/title/${poemName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "thundercomb-poetry-db-v1.p.rapidapi.com",
            "x-rapidapi-key": "08fdd563dcmshc0ae5fec65e6b78p1160efjsn196e12f76f1b"
        }
    });
    const poem = await fetchPoem.json();
    const poemObj = { title: poem[0].title, author: poem[0].author, lines: poem[0].lines };
    poemObj.lines.forEach((line, i) => {
        let li = document.createElement("li")
        li.classList.add(`${i}`);
        li.innerText = line
        poemUl.appendChild(li)
            });
            
    let h = document.createTextNode(poemObj.title)
    poemH.appendChild(h)

    let authorName = document.createTextNode(poemObj.author)
    
    if (authorName.nodeValue === "            George Gordon, Lord Byron" || authorName.nodeValue === "George Gordon, Lord Byron" ) {
        authorName.nodeValue = 'Lord Byron'
        
    }
    authorDiv.appendChild(authorName)
    poemDiv.appendChild(poemUl)
    
// Expand Line
    const fetchWord = function (event) {
        if (modalOn === true) {
            let word = event.target.innerText;
            wordFetcher(word);



        }
    }
    const lineClick = function(){

        modal.style.display = "block";

        let line = event.target;
        
        let lineClass = line.classList;
        let lineArr = line.innerText.split(" ");
        
        lineArr.forEach((word, i) => {
            modalText.innerHTML += `<span>${word} </span>`

        });
        

        modalOn = true;
        
        modalText.className = lineClass;
        let spans = document.querySelectorAll("span");
        spans.forEach(span => {
            span.addEventListener("click", fetchWord);
        });
        
        
    };
    let lis = document.querySelectorAll('li');
    lis.forEach(li => {

        li.addEventListener("click", lineClick);      
})
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalText.innerText = ''
            
            wordModal.style.display = "none";

            modalOn = false
        }
    }

    const keypress = function(event) {
        if (modalText.innerText !== '' && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
            let oldClass = Number(modalText.classList.value)
            if (event.key === "ArrowLeft") {
                oldClass = oldClass - 1
            } else {
                oldClass = oldClass + 1
            }

            let nextLi = document.getElementsByClassName(oldClass);
    
            modalText.innerText = nextLi[0].innerText;
            modalText.className = oldClass
        }
    }
    document.addEventListener("keydown", keypress, false);



// arrow click listeners $ functions
    const leftClick = function () {
        if (modalText.innerText !== '') {
            let oldClass = Number(modalText.classList.value)
            oldClass = oldClass - 1
            let nextLi = document.getElementsByClassName(oldClass);
            modalText.innerText = nextLi[0].innerText;
            modalText.className = oldClass
        }
    }
    const rightClick = function () {
        if (modalText.innerText !== '') {
            let oldClass = Number(modalText.classList.value)
            oldClass = oldClass + 1
            let nextLi = document.getElementsByClassName(oldClass);
            modalText.innerText = nextLi[0].innerText;
            modalText.className = oldClass

        }
        
    }

    leftArrow.addEventListener("click", leftClick );
    rightArrow.addEventListener("click", rightClick);

    // author click listener
    let authorFetcher = async function (author) {
        let authorDiv = document.getElementById('authorInfo')
        
        
        if (authOn === false) {
            if (authorDiv.innerHTML.length === 0) {
                let body = await fetch(`https://cors-anywhere.herokuapp.com/http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${author}`, {
                    mode: 'cors'
                });
                await console.log(body)
                let jsonbody = await body.json();
                authorDiv.innerHTML = Object.values(jsonbody.query.pages)[0].extract
            }
            authorDiv.style.visibility = "visible"
            authOn = true
        } else {
            authorDiv.style.visibility = "hidden"
            authOn = false
        }


    }
    author.addEventListener("click", function() {authorFetcher(author.textContent)})
}
