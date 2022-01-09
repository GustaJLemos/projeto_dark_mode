const cont = document.querySelector('.container')
const btn = document.querySelector('#butao')

btn.addEventListener("click", () => {
    cont.classList.toggle("dark-mode")
})

