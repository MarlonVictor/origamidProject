export default function initFetchBitcoin() {
    fetch('https://blockchain.info/ticker')
        .then(res => res.json())
        .then(data => {
            const btcPrice = document.querySelector('[data-bitcoin]')
            btcPrice.innerText = (1000 / data.BRL.sell).toFixed(4)
        })
        .catch(err => console.log(Error(err)))
}