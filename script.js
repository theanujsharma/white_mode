const btn = document.getElementById("btn")
const body = document.getElementById("body")
body.style.backgroundColor = "white"

btn.addEventListener("click",
function(){
    if (body.style.backgroundColor == "white")
    {
        body.style.backgroundColor = "black"
        btn.value = "Light Mode"
    }
    else
    {
        body.style.backgroundColor = "white"
        btn.value = "Dark Mode"
    }
})