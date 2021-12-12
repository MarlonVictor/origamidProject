const tabMenu = document.querySelectorAll('.animals--list li')
const tabDesc = document.querySelectorAll('.animals--description section')

if (tabMenu.length && tabDesc.length) {
    tabDesc[0].classList.add('active')
    
    function activeTab(index) {
        tabDesc.forEach(section => section.classList.remove('active'))
        tabDesc[index].classList.add('active')
    }
    
    tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => activeTab(index))
    })
}