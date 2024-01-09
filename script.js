const words = "m"

const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div")
        div.innerText = char
        div.classList.add("character")

        return div
    }

    document.getElementById("spiral").append(createElement(0))
})