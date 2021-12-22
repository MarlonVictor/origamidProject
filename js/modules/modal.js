export default function initModal() {
    const openModalBtn = document.querySelector('[data-modal="open"]')
    const closeModalBtn = document.querySelector('[data-modal="close"]')
    const modalContainer = document.querySelector('[data-modal="container"]')
    
    if (openModalBtn && closeModalBtn && modalContainer) {
        function toggleModal(ev) {
            ev.preventDefault()
            modalContainer.classList.toggle('active')
        }
    
        function clickFora(ev) {
            ev.target == this ? toggleModal(ev) : ''
        }
    
        openModalBtn.addEventListener('click', toggleModal)
        closeModalBtn.addEventListener('click', toggleModal)
        modalContainer.addEventListener('click', clickFora)
    }
}