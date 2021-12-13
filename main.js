// Navegação por tab na lista de animais
function initTabNav() {
    const tabMenu = document.querySelectorAll('.animals--list li')
    const tabDesc = document.querySelectorAll('.animals--description section')

    if (tabMenu.length && tabDesc.length) {
        tabDesc[0].classList.add('active')
        
        function activeTab(index) {
            tabDesc.forEach(section => section.classList.remove('active'))
            tabDesc[index].classList.add('active')
        }
        
        tabMenu.forEach((item, index) => item.addEventListener('click', () => activeTab(index)))
    }
}

// Lista com animação de acordeão na sessão de FAQ
function initAccordion() {
    const accordionList = document.querySelectorAll('.faq--list dt')
    const activeClassName = 'active'

    if (accordionList.length) {
        const toggleClass = el => {
            el.classList.toggle(activeClassName)
            el.nextElementSibling.classList.toggle(activeClassName)
        }
    
        toggleClass(accordionList[0])
    
        function activeAccordion() {
            toggleClass(this)
        }
        
        accordionList.forEach(item => item.addEventListener('click', activeAccordion))
    }
}

// Animação de scroll suave nos links internos
function initSmoothScroll() {
    const internalLinks = document.querySelectorAll('.menu a[href^="#"')
    
    if (internalLinks.length) {
        function scrollToSection(event) {
            event.preventDefault()

            const href = event.currentTarget.getAttribute('href')
            const section = document.querySelector(href)
        
            section.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        }
        
        internalLinks.forEach(link => link.addEventListener('click', scrollToSection))
    }
}


initTabNav()
initAccordion()
initSmoothScroll()