const btn = document.querySelector('.btn')
const popup = document.querySelector('.popup-wrapper')
const repoLink = document.querySelector('a')

btn.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', e => {
    const clickedElement = e.target.classList[0]
    const className = ['popup-closed', 'popup-link', 'popup-wrapper']
    const closePopup = className.some(className => className === clickedElement)
    

    if (closePopup) {
        popup.style.display = 'none'
        repoLink.setAttribute('href', 'https://github.com/fabriciocientistati')
    }
})

