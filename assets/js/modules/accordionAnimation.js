// Lista com animação de acordeão na sessão de FAQ
export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

    if (accordionList.length) {
        const toggleClass = el => {
            el.classList.toggle('active')
            el.nextElementSibling.classList.toggle('active')
        }
    
        toggleClass(accordionList[0])
    
        function activeAccordion() {
            toggleClass(this)
        }
        
        accordionList.forEach(item => item.addEventListener('click', activeAccordion))
    }
}