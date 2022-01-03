import outsideClick from './outsideClick.js'

export default function initMobileMenu() {
    const menuBtn = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const events = ['click', 'touchstart']

    if(menuBtn) {
        function openMenu(ev) {
            menuBtn.classList.add('active')
            menuList.classList.add('active')
    
            outsideClick(menuList, events, () => {
                menuBtn.classList.remove('active')
                menuList.classList.remove('active')
            })
        }
    
        events.forEach(ev => menuBtn.addEventListener(ev, openMenu))
    }
}