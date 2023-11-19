const date = new Date()


const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
// long: chu; numberic: so 
const formattedDate = new Date().toLocaleDateString('en-US', options);

const time = date.getTime()

const minute = date.getMinutes()
const hour = date.getHours()
const second = date.getSeconds()

document.getElementById("fulltime").innerHTML = `${date}`
document.getElementById("timenow").innerHTML = `<b>Now: ${hour}:${minute}:${second}</b>`

document.getElementById("sumtime").innerHTML = `<b style="color: blue">Today: ${formattedDate}</b>`