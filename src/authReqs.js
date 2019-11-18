
export let authorFetcher = async function (author, authOn) {
let authorDiv = document.getElementById('authorInfo')
    debugger
    if (authOn === false) {
        if (authorDiv.innerHTML !== undefined) {
    let body = await fetch(`https://cors-anywhere.herokuapp.com/http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${author}`, {
        mode: 'cors' });
    await console.log(body)
    let jsonbody = await body.json();
    authorDiv.innerHTML=Object.values(jsonbody.query.pages)[0].extract
        }
    authorDiv.style.visibility = "visible"
    authOn = true
    } else {
    authorDiv.style.visibility = "hidden"
    authOn = false
    }


}
