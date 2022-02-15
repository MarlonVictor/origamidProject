export default class Slide {
    constructor(slide, wrapper) {
        this.slideContainer = document.querySelector(slide)
        this.slideWrapper = document.querySelector(wrapper)
        this.dist = {
            finalPosition: 0,
            startX: 0,
            movement: 0
        }
    }

    updatePosition(clientX) {
        this.dist.movement = (this.dist.startX - clientX) * 2
        return this.dist.finalPosition - this.dist.movement
    }

    moveSlide(distX) {
        this.dist.movePosition = distX
        this.slideContainer.style.transform = `translate3d(${distX}px, 0, 0)`
    }

    onStart(ev) {
        let moveType

        if (ev.type == 'mousedown') {
            ev.preventDefault()
            this.dist.startX = ev.clientX
            moveType = 'mousemove'

        } else {
            this.dist.startX = ev.changedTouches[0].clientX
            moveType = 'touchmove'
        }

        this.slideWrapper.addEventListener(moveType, this.onMove)
    }

    onMove(ev) {
        const pointerPosition = ev.type == 'mousemove' ? ev.clientX : ev.changedTouches[0].clientX
        const finalPosition = this.updatePosition(pointerPosition)
        
        this.moveSlide(finalPosition)
    }

    onEnd(ev) {
        const moveType = ev.type == 'mouseup' ? 'mousemove' : 'touchmove'

        this.slideWrapper.removeEventListener(moveType, this.onMove)
        this.dist.finalPosition = this.dist.movePosition
    }

    bindEvents() {
        this.onStart = this.onStart.bind(this)
        this.onMove = this.onMove.bind(this)
        this.onEnd = this.onEnd.bind(this)
    }

    addSlideEvents() {
        this.slideWrapper.addEventListener('mousedown', this.onStart)
        this.slideWrapper.addEventListener('touchstart', this.onStart)
        this.slideWrapper.addEventListener('mouseup', this.onEnd)
        this.slideWrapper.addEventListener('touchend', this.onEnd)
    }

    init() {
        this.bindEvents()
        this.addSlideEvents()

        return this
    }
}