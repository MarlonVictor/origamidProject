// Anima as sessões visíveis na window
export default function initScrollAnimation() {
    const sections = document.querySelectorAll('.section')
    const windowHalfHeight = window.innerHeight * 0.5

    if (sections.length) {
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowHalfHeight) < 0
        
                if (isSectionVisible)
                    section.classList.add('active')
            })
        }
        
        window.addEventListener('scroll', animaScroll)
        animaScroll()
    }
}