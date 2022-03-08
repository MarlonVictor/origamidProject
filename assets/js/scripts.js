import initModal from './modules/modal.js'
import initTabNav from './modules/tabNav.js'
import initTooltip from './modules/tooltip.js'
import initAccordion from './modules/accordionAnimation.js'
import initSmoothScroll from './modules/smoothScroll.js'
import initDropdownMenu from './modules/dropdownMenu.js'
import initScrollAnimation from './modules/scrollAnimation.js'
import initMobileMenu from './modules/mobileMenu.js'
import initOperationTime from './modules/operationTime.js'
import initFetchAnimals from './modules/fetchAnimals.js'
import initFetchBitcoin from './modules/fetchBitcoin.js'
import SlideNav from './modules/slide'


initModal()
initTabNav()
initTooltip()
initAccordion()
initSmoothScroll()
initDropdownMenu()
initScrollAnimation()
initMobileMenu()
initOperationTime()
initFetchAnimals()
initFetchBitcoin()

// const slide = new SlideNav('ul.slide', '.slide--wrapper')
// slide.init()
// slide.addArrow('[data-slide="prev"]', '[data-slide="next"]')

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()
slide.addControl('.custom-controls')