const cont = document.querySelector('.container')
const btn = document.querySelector('#btnDarkMode')

btn.addEventListener("click", () => {
    cont.classList.toggle("dark-mode")
})

