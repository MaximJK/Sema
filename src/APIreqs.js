const titlesFetch = "http://poetrydb.org/title"
let request = new XMLHttpRequest()

const response = fetch(titlesFetch).then(data => data.json()).then(data => data.map(data => data.titles))
let title = response[Math.floor(Math.random() * response.length)];
const poem = json.parse(fetch(`http://poetrydb.org/title/${title}`));
const title = poem.first.title
const author = poem.first.author
const body = poem.first.lines