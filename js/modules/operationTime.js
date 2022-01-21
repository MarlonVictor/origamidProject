export default function initOperationTime() {
    const operation = document.querySelector('[data-week]')
    const weekDays = operation.dataset.week.split(',').map(Number)
    const weekSchedule = operation.dataset.schedule.split(',').map(Number)

    const date = new Date()
    const dayNow = date.getDay()
    const timeNow = date.getHours()

    const openWeek = weekDays.indexOf(dayNow) !== -1
    const openHours = timeNow >= weekSchedule[0] && timeNow < weekSchedule[1]

    openWeek && openHours ? operation.classList.add('open') : operation.classList.remove('open')
}