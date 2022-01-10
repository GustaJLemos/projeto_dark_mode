const cont = document.querySelector('.container')
const btn = document.querySelector('#btnDarkMode')
// const label = document.querySelector('.button-purple')

btn.addEventListener("click", () => {
    cont.classList.toggle("dark-mode")
    // label.innerHTML = "Light Mode"
})

