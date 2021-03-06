export default function outsideClick(el, ev, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    if (!el.hasAttribute(outside)) {
        ev.forEach(userEv => {
            setTimeout(() => html.addEventListener(userEv, handleOutsideClick), 500)
        })

        el.setAttribute(outside, '')
    }

    function handleOutsideClick(outsideEv) {
        if (!el.contains(outsideEv.target)) {
            el.removeAttribute(outside)

            ev.forEach(userEv => {
                html.removeEventListener(userEv, handleOutsideClick)
            })
            
            callback()
        }
    }
}