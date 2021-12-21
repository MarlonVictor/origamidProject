const activeClassName = 'active'


// Navegação por tab na lista de animais
function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabDesc = document.querySelectorAll('[data-tab="desc"] section')

    if (tabMenu.length && tabDesc.length) {
        tabDesc[0].classList.add(activeClassName)
        
        function activeTab(index) {
            const direction = tabDesc[index].dataset.anime

            tabDesc.forEach(section => section.classList.remove(activeClassName))
            tabDesc[index].classList.add(activeClassName, direction)
        }
        
        tabMenu.forEach((item, index) => item.addEventListener('click', () => activeTab(index)))
    }
}

// Lista com animação de acordeão na sessão de FAQ
function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

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
    const internalLinks = document.querySelectorAll('[data-scroll="smooth"] a[href^="#"]')
    
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

// Anima as sessões visíveis na window
function initScrollAnimation() {
    const sections = document.querySelectorAll('.section')
    const windowHalfHeight = window.innerHeight * 0.5

    if (sections.length) {
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowHalfHeight) < 0
        
                if (isSectionVisible)
                    section.classList.add(activeClassName)
            })
        }
        
        window.addEventListener('scroll', animaScroll)
        animaScroll()
    }
}


initTabNav()
initAccordion()
initSmoothScroll()
initScrollAnimation()