import outsideClick from './outsideClick.js'

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    
    dropdownMenus.forEach(menu => {
        ['click', 'touchstart'].forEach(userEv => {
            menu.addEventListener(userEv, handleClick)
        })
    })
    
    function handleClick(ev) {
        ev.preventDefault()
        this.classList.add('active')
    
        outsideClick(
            this, 
            ['click', 'touchstart'], 
            () => this.classList.remove('active')
        )
    }
}