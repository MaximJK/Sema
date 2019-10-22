import {
    wordFetcher
} from "./wordReq"
const fetch = require('node-fetch');

export const getPoem = async() => {
    debugger
    let modalOn = false
    const authorDiv = document.getElementById('authorDiv');
    const poemH = document.getElementById('poemH');
    const app = document.getElementById('app');
    let poemUl = document.getElementById('poemUl');
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modalText");
    let wordModal = document.getElementById("wordModal")
    let poemDiv = document.getElementById("poemDiv")
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

    let a = document.createTextNode(poemObj.author)
    authorDiv.appendChild(a)
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
        debugger
        let lineClass = line.classList;
        let lineArr = line.innerText.split(" ");
      
        lineArr.forEach((word, i) => {
            modalText.innerHTML += `<span>${word} </span>`

        });

        modalOn = true;
        debugger
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
            debugger
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
            debugger
            modalText.className = oldClass
        }
    }
    document.addEventListener("keydown", keypress, false);







}