const inputField = document.getElementById("squareSide")
const countButton = document.getElementById("countButton")
const Luas = document.getElementById("Luas")

countButton.addEventListener("click"), function(){
    let s = document.getElementById("squareSide")

    let L = s*s

    Luas.innerHTML = `Luas persegi menggunakan rumus S x S adalah ${L}`
}