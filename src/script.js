const amountInp = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result')

//=====================================================================================
//
//=====================================================================================

const exchangeRates = {
    'USD': {
        'EUR': 0.85,
        'BRL': 5.87,
        'USD': 1
    },
    'EUR': {
        'USD': 1.13,
        'BRL': 6.65,
        'EUR': 1
    },
    'BRL': {
        'USD': 0.17,
        'EUR': 0.15,
        'BRL': 1
    }
};

//=======================================================================================
//
//=======================================================================================

convertBtn.addEventListener('click', () =>{
    const amount = parseFloat(amountInp.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (!amount || amount<= 0) {
        resultDiv.textContent = "Valor inválido. Digite um número maior que zero.";
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    resultDiv.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`
});
