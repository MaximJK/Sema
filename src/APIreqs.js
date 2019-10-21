const fetch = require('node-fetch');

export const getPoem = async() => {
    debugger
    const authorDiv = document.getElementById('authorDiv');
    const poemH = document.getElementById('poemH');
    const app = document.getElementById('app');
    let poemUl = document.getElementById('poemUl');
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modalText");
    modalText.innerText = ''
    const fetchTitles = await fetch("http://poetrydb.org/title");
    const titlesArr = await fetchTitles.json();
    const titles = titlesArr.titles;
    let poemName = titles[Math.floor(Math.random() * titles.length)];
    const fetchPoem = await fetch(`http://poetrydb.org/title/${poemName}`);
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
    app.appendChild(poemUl)
    
// Expand Line
    const lineClick = function(){

        modal.style.display = "block";
        let line = event.target
        // let lineClass = line.classList
        let lineArr =line.innerText.split(" ")
        // lineArr.forEach((word, i) => {

        // })
        //     `<span className="word-"${i}>${word}</span>`
        // })
        // debugger
        modalText.innerH=line.innerText

        modalText.className = lineClass
        
        
    }
    let lis = document.querySelectorAll('li')
    lis.forEach(li => {

        li.addEventListener("click", lineClick);      
})
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalText.innerText = ''
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
    document.addEventListener("keydown", keypress, false)

    const fetchWord = await fetch(`https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb/${word}`);
    const wordInfo = await fetchWord.json();


}