import initAnimateNumbers from './animateNumbers.js'

export default function initFetchAnimals() {
    async function fetchAnimals(url) {
        try {
            const numbersList = document.querySelector('.numbers--list')
        
            const animalsResponse = await fetch(url)
            const animalsJSON = await animalsResponse.json()
        
            animalsJSON.forEach(animal => {
                const animalDiv = createAnimalContent(animal)
                numbersList.appendChild(animalDiv)
            })
        
            initAnimateNumbers()

        } catch(err) {
            console.log(Error(err))
        }
    }
    
    function createAnimalContent(animal) {
        const div = document.createElement('div')
        div.classList.add('number--animal')
    
        div.innerHTML = `
            <h3>${animal.species}</h3>
            <span data-number>${animal.total}</span>
        `
    
        return div
    }
    
    fetchAnimals('./animals.json')
}
