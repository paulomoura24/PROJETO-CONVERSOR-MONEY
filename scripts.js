const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertvalues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueconverted = document.querySelector(".currency-value")

    const dollarToday = 5.81
    const eurotoday = 6.28

    if (currencySelect.value == "dollar") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency(){
    const currancyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dollar") {
        currancyName.innerHTML = "Dollar Americano"
        currencyImage.src = "./assets/Dollar.png"
    }

    if (currencySelect.value == "euro") {
        currancyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    convertvalues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertvalues)

