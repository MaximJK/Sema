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
    debugger
    const fetchTitles = await fetch("http://poetrydb.org/title");
    debugger
    const titlesArr = await fetchTitles.json();
    const titles = titlesArr.titles;
    let poemName = titles[Math.floor(Math.random() * titles.length)];
    const fetchPoem = await fetch(`http://poetrydb.org/title/${poemName}`);
    debugger
    const poem = await fetchPoem.json();
    debugger
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
            debugger

    const lineClick = function(){
        debugger
        modal.style.display = "block";
        let line = event.target
        let lineClass = line.classList
        // x.className = 'lineModal'
        modalText.innerText=line.innerText
        debugger
        modalText.className = lineClass
        
        
    }
    let lis = document.querySelectorAll('li')
    lis.forEach(li => {
        debugger
        li.addEventListener("click", lineClick);      
})
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalText.innerText = ''
        }
    }

    const keypress = function(event) {
        debugger
        if (modalText.innerText !== '' && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
            let oldClass = Number(modalText.classList.value)
            if (event.key === "ArrowLeft") {
                oldClass = oldClass - 1
            } else {
                oldClass = oldClass + 1
            }

            let nextLi = document.getElementsByClassName(oldClass);
            debugger
            modalText.innerText = nextLi[0].innerText;
            modalText.className = oldClass
        }
    }
    document.addEventListener("keydown", keypress, false)
    debugger

}