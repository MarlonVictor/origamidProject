export class Slide {
    constructor(slide, wrapper) {
        this.slideContainer = document.querySelector(slide)
        this.slideWrapper = document.querySelector(wrapper)
        this.dist = {
            finalPosition: 0,
            startX: 0,
            movement: 0
        }
        this.activeClass = 'active'
    }

    transition(active) {
        this.slideWrapper.style.transition = active ? 'transform .3s' : ''
    }

    updatePosition(clientX) {
        this.dist.movement = (this.dist.startX - clientX) * 1.4
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

        this.transition(false)
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
        this.transition(true)
        this.changeSlideOnEnd()
    }

    changeSlideOnEnd() {
        if (this.dist.movement > 120 && this.index.next !== undefined) {
            this.activeNextSlide()

        } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
            this.activePrevSlide()

        } else {
            this.changeSlide(this.index.active)
        }
    }

    addSlideEvents() {
        this.slideWrapper.addEventListener('mousedown', this.onStart)
        this.slideWrapper.addEventListener('touchstart', this.onStart)
        this.slideWrapper.addEventListener('mouseup', this.onEnd)
        this.slideWrapper.addEventListener('touchend', this.onEnd)
    }

    slidePosition(slide) {
        const margin = (this.slideWrapper.offsetWidth - slide.offsetWidth) / 2
        return -(slide.offsetLeft - margin)
    }

    slidesConfig() {
        this.slideArray = [...this.slideContainer.children].map(el => {
            const position = this.slidePosition(el)

            return {
                el,
                position
            }
        })
    }

    slidesIndexNav(i) {
        const lastSlide = this.slideArray.length - 1

        this.index = {
            prev: i ? i - 1 : i = undefined,
            active: i,
            next: i === lastSlide ? undefined : i + 1
        }
    }

    changeSlide(i) {
        const activeSlide = this.slideArray[i]
        this.moveSlide(activeSlide.position)
        this.slidesIndexNav(i)
        this.dist.finalPosition = activeSlide.position
        this.changeActiveClass()
    }

    changeActiveClass() {
        this.slideArray.forEach (item => item.element.classList.remove(this.activeClass))
        this.slideArray[this.index.active].element.classList.add(this.activeClass)
    }

    activePrevSlide() {
        if (this.index.prev !== undefined) 
            this.changeSlide(this.index.prev)
    }

    activeNextSlide() {
        if (this.index.next !== undefined) 
            this.changeSlide(this.index.next)
    }

    onResize() {
        setTimeout(() => {
            this.slidesConfig()
            this.changeSlide(this.index.active)
        }, 1000)
    }

    addResizeEvent() {
        window.addEventListener('resize', this.onResize)
    }

    bindEvents() {
        this.onStart = this.onStart.bind(this)
        this.onMove = this.onMove.bind(this)
        this.onEnd = this.onEnd.bind(this)
        this.onResize = this.onResize.bind(this)
        this.activePrevSlide = this.activePrevSlide.bind(this)
        this.activeNextSlide = this.activeNextSlide.bind(this)
    }

    init() {
        this.bindEvents()
        this.transition(true)
        this.addSlideEvents()
        this.slidesConfig()
        this.addResizeEvent()
        this.changeSlide(0)

        return this
    }
}

export class SlideNav extends Slide {
    addArrow(prev, next) {
        this.prevElement = document.querySelector(prev)
        this.nextElement = document.querySelector(next)

        this.addArrowEvent()
    }

    addArrowEvent() {
        this.prevElement.addEventListener('click', this.activePrevSlide)
        this.nextElement.addEventListener('click', this.activeNextSlide)
    }
}