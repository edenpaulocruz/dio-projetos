# Requisitando dados de uma API de criptomoedas

![Tela](./screen.png)

## Descrição

O objetivo deste projeto foi manipular uma API e exibir as informações em uma página responsiva.

Foi utilizada a API de criptomoedas da [Coin Market Cap](https://coinmarketcap.com).

Abaixo, seguem alguns links sobre a API:

* [Portal do desenvolvedor](https://pro.coinmarketcap.com/account)

* [Documentação de autenticação](https://coinmarketcap.com/api/documentation/v1/#section/Authentication)

* [Documentação da API](https://coinmarketcap.com/api/documentation/v1/#)

## Como executar

Faça o clone ou download do repositório para um computador local.

Para executar corretamente, é preciso uma chave de autenticação para a API, que pode ser adquirida de forma gratuita consultando o link acima. A chave deverá ser inserida no arquivo `script.js` conforme abaixo.

```js
const apikey = {
  key: 'Sua API Key aqui'
}
```

Também, é necessário ter instalada no navegador a extensão Moesif Origin & CORS Changer, que está disponível para Google Chrome e Mozilla Firefox. Por padrão, ela é instalada desabilitada.

Após a inclusão da chave, instalação e habilitação da extensão, basta abrir o arquivo `index.html` no navegador WEB da sua preferência.

Depois de abrir o projeto, lembre-se de desabilitar a extensão. Com ela habilitada poderá ocorrer erro em alguns sites.