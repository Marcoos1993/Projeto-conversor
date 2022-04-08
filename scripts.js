const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const bitcoin = 235.687

 

const convertValues = () => {  

    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReais);



    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputReais / dolar);
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputReais / euro);
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputReais / bitcoin);
    }

}

const changeCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar'
        currencyImg.src = "./Assets/dolar-americano.svg"

    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./Assets/euro.svg"

    }


    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./Assets/bitcoin.png"

    }


    convertValues ()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency, )