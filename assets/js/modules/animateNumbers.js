export default function initAnimateNumbers() {
    const numbers = document.querySelectorAll('[data-number]')
    const observerTarget = document.querySelector('.numbers')

    function numberEvent() {
        numbers.forEach(number => {
            let start = 0
            const total = +number.innerText
            const increment = Math.floor(total / 100)
    
            const timer = setInterval(() => {
                start += increment
    
                number.innerText = start
    
                if (start > total) {
                    number.innerText = total
                    clearInterval(timer)
                }
            }, 20 * Math.random());
        })
    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('active')) {
            observer.disconnect()
            numberEvent()
        }
    }

    const observer = new MutationObserver(handleMutation)
    observer.observe(observerTarget, { attributes: true })
}