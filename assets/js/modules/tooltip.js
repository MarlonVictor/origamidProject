export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]')

    function createTooltipBox(el) {
        const tooltipBox = document.createElement('div')
        const tooltipText = el.getAttribute('aria-label')

        tooltipBox.classList.add('tooltip')
        tooltipBox.innerHTML = tooltipText

        document.body.appendChild(tooltipBox)
        return tooltipBox
    }

    function onMouseOver() {
        const tooltipBox = createTooltipBox(this)

        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove)

        onMouseLeave.element = this
        onMouseLeave.tooltipBox = tooltipBox
        this.addEventListener('mouseleave', onMouseLeave)
    }

    const onMouseMove = {
        handleEvent(ev) {
            this.tooltipBox.style.top = `${ev.pageY + 20}px`
            this.tooltipBox.style.left = `${ev.pageX + 20}px`
        }
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    tooltips.forEach(item => item.addEventListener('mouseover', onMouseOver))
}