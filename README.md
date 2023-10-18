<h1 align="center"><img src="https://raw.githubusercontent.com/BrasilAPI/BrasilAPI/master/public/brasilapi-logo-small.png" alt="Logo da BrasilAPI"></h1>

<div align="center">
  <p>
    <strong>Uma lib para a API do BrasilAPI (para Node, Deno ou Bun) utilizando Javascript/Typescript </strong>
  </p>
</div>

# Introdução

Esse SDK foi construído com o intuito de ser flexível, de forma que todos possam utilizar todas as features 
e versões da BrasilAPI.

Você pode acessar a documentação oficial da BrasilAPI acessando esse [link](https://brasilapi.com.br/docs).

# Instalação

```
$ npm install brasilapi-js
```

# Documentação

Documentação oficial da API com todas as chamadas poderão se encontradas [neste link](https://brasilapi.com.br/docs).


# Utilização

```
import api from "brasilapi-js";
```

## Endpoints

Abaixo você pode ver todos os endpoints disponíveis, por padrão, na biblioteca:

### Banks

Buscando todos os bancos disponíveis na API.
```js
const response = api.bank.getAll();
```

Buscando um banco específico pelo seu código.
```js
const response = api.bank.getBy(1);
```

### CEP V2

Buscando um CEP específico.

```js
const response = api.cep.getBy('01001000');
```

### CNPJ

Buscando um CNPJ específico.

```js
const response = api.cnpj.getBy('00000000000191');
```

### Corretoras

Buscando uma corretora específica pelo CNPJ.

```js
const response = api.cvm.getBy('76621457000185');
```

Buscando todas as corretoras listadas pela CVM.

```js
const response = api.cvm.getAll();
```

### CPTEC

Buscando uma cidade pelo nome.

```js
const response = api.cptec.city.getBy('São Paulo');
```

Buscando todas as cidades disponíveis.

```js
const response = api.cptec.city.getAll();
```

Buscando as informações meteorológicas em todas as capitais dos estados brasileiros.

```js
const response = api.cptec.weather.capital.getAll();
```

Buscando as informações meteorológicas em um aeroporto específico através do seu código ICAO.

```js
const response = api.cptec.weather.airport.getBy('SBGR');
```

Buscando as informações meteorológicas de uma cidade específica pelo seu código.

```js
const response = api.cptec.weather.forecast.getBy(999);
```

Buscando as informações meteorológicas de uma cidade específica no período de X dias.

**Obs.:** O primeiro parâmetro se refere ao código da cidade e o segundo parâmetro refere-se a quantidade de dias.
Lembrando que só é possível buscar informações entre 1 a 6 dias.

```js
const response = api.cptec.weather.forecast.getBy(999, 6);
```

Buscando a previsão oceânica em uma cidade específica.

```js
const response = api.cptec.weather.ocean.getBy(999);
```

Buscando a previsão oceânica em uma cidade específica no período de X dias.

**Obs.:** O primeiro parâmetro se refere ao código da cidade e o segundo parâmetro refere-se a quantidade de dias.
Lembrando que só é possível buscar informações entre 1 a 6 dias.

```js
const response = api.cptec.weather.ocean.getBy(999, 6);
```

### DDD

Buscando o estado e cidades que possuem determinado DDD.

```js
const response = api.ddd.getBy.getBy(77);
```

### Feriados

Buscando todos os feriados nacionais em determinado ano.

```js
const response = api.holidays.getBy(2022);
```

### FIPE

Buscando todas as marcas de veículos referente a um tipo de veículo.

```js
const response = api.fipe.brands.getBy('caminhoes');
```

Buscando o preço de um veículo específico pelo seu código FIPE.

```js
const response = api.fipe.price.getBy('001004-9');
```

Buscando as tabelas de referência existentes.

```js
const response = api.fipe.tables.getAll();
```

### IBGE

Buscando todos os municípios de um estado específico pela sua sigla.

```js
const response = api.ibge.state.getBy('BA');
```

Buscando informações de todos os estados brasileiros.

```js
const response = api.ibge.state.getAll();
```

Buscando informações de um estado específico pela sua sigla.

```js
const response = api.ibge.country.getBy('BA');
```

### ISBN

Buscando informações sobre um livro específico pelo seu código ISBN.

```js
const response = api.isbn.getBy('9788545702870');
```

### NCM

Buscando informações sobre todos os NCMs.

```js
const response = api.ncm.getAll();
```

Buscando informações sobre um NCM específico.

```js
const response = api.ncm.getBy('01012100');
```

Buscando informações de um NCM a partir de um código ou descrição.

```js
const response = api.ncm.search('01012100');
```

### Pix

Buscando informações de todos os participantes do PIX no dia atual ou anterior.

```js
const response = api.pix.getAll();
```

### Registro BR

Buscando informações de um domínio específico.

```js
const response = api.registerBr.getBy('google.com');
```

### Taxas

Buscando as taxas de juros e alguns índices oficiais do Brasil.

```js
const response = api.taxes.getAll();
```

Buscando informações de uma taxa a partir do seu nome/sigla.

```js
const response = api.taxes.getBy('Selic');
```
