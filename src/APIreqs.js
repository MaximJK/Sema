const fetch = require('node-fetch');

export const getPoem = async() => {
    debugger
    debugger
    const authorDiv = document.getElementById('authorDiv');
    const poemH = document.getElementById('poemH');
    const app = document.getElementById('app');
    let ul = document.getElementById('poemUl');
    const fetchTitles = await fetch("http://poetrydb.org/title")
    const titlesArr = await fetchTitles.json()
    const titles = titlesArr.titles
    let poemName = titles[Math.floor(Math.random() * titles.length)]
    const fetchPoem = await fetch(`http://poetrydb.org/title/${poemName}`)
    const poem = await fetchPoem.json()
    return { title: poem[0].title, author: poem[0].author, lines: poem[0].lines }
    //         poemObj.lines.forEach(line => {
    //             let li = document.createElement("li")
    //             li.textContent = line
    //             ul.appendChild(li)
    //         });
            
    //         let h = document.createTextNode(poemObj.title)
    //         poemH.appendChild(h)

    //         let a = document.createTextNode(poemObj.author)
    //         authorDiv.appendChild(a)

    //         app.appendChild(ul)
    //         debugger
    //         const lineClick = function(){
    //             debugger
    //             let x = event.target
    //             console.log(x)
    //         }
    //         let lis = document.querySelectorAll('li')
    //         lis.forEach(li => {
    //             debugger
    //             li.addEventListener("click", lineClick);

                
    //     })

    //     }).then(response => {
    //         console.log(response);
    //     })
    // })
    // return x
    // }
}