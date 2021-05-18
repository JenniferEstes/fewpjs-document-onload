document.addEventListener("domContentLoaded", function() {
    replaceText()
})

function replaceText() {
    document.getElementById("text")
        .innerText = "This is really cool!"
}
