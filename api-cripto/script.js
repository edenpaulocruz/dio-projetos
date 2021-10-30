(function(win, doc) {
	'use strict'

	const apikey = {
		key: 'Sua API Key aqui'
	}

	fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
		.then((response) => {
			if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status)
			return response.json()
		})
		.then((api) => {
			for (let i = 0; i < 10; i++) {
				showCoin(api.data[i].name, api.data[i].symbol, api.data[i].first_historical_data)
			}
		})
		.catch((error) => {
			console.error(error.message)
		})

	function showCoin(name, symbol, date) {
		const coinsSection = document.querySelector('[data-js="coins"]')
		
		const coinName = document.createElement('h3')
		coinName.textContent = name
		coinName.classList.add('coin-name')
		
		const formatedDate = formatDate(date)
			
		const coinDescription = document.createElement('p')
		coinDescription.textContent = `Apareceu pela primeira vez nos registros da Coin Market Cap em ${formatedDate} e o seu símbolo é ${symbol}.`
		coinDescription.classList.add('text')
		
		coinsSection.appendChild(coinName)
		coinsSection.appendChild(coinDescription)
	}

	function formatDate(date) {
		const temp = new Date(date)
		const day = adicionaZero(temp.getDate().toString())
		const month = adicionaZero((temp.getMonth()+1).toString())
		const year = temp.getFullYear().toString()
		
		return `${day}/${month}/${year}`
	}

	function adicionaZero(number) {
		if (number <= 9)
			return "0" + number
		else
			return number
	}

})(window, document)