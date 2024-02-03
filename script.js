const men = document.getElementById("men")
const women = document.getElementById("women")
const kids = document.getElementById("kids")
const menGarments = document.getElementById("menGarments")
const womenGarments = document.getElementById("womenGarments")
const kidGarments = document.getElementById("kidGarments")

men.addEventListener("click", () => {
    console.log('Men is clicked');
    // womenGarments.classList.toggle("d-none")
    // kidGarments.classList.toggle("d-none")
    // menGarments.classList.toggle("display")
})

women.addEventListener("click", () => {
    console.log('Women is clicked');
    womenGarments.classList.toggle("display")
    menGarments.classList.toggle("d-none")
    kidGarments.classList.toggle("d-none")
})

kids.addEventListener("click", () => {
    console.log('Kids is clicked');
    kidGarments.classList.toggle("display")
    menGarments.classList.toggle("d-none")
    womenGarments.classList.toggle("d-none")
})