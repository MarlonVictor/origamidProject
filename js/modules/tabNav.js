// Navegação por tab na lista de animais
export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabDesc = document.querySelectorAll('[data-tab="desc"] section')

    if (tabMenu.length && tabDesc.length) {
        tabDesc[0].classList.add('active')
        
        function activeTab(index) {
            const direction = tabDesc[index].dataset.anime

            tabDesc.forEach(section => section.classList.remove('active'))
            tabDesc[index].classList.add('active', direction)
        }
        
        tabMenu.forEach((item, index) => item.addEventListener('click', () => activeTab(index)))
    }
}