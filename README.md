## Olá! Essa é uma simples aplicação que desenvolvi para sortear um trending topics aleatório do Twitter através da API deles!

### Como funciona?

É bem simples. A aplicação faz uma requisição GET no endpoint da API, eu limitei para os 10 primeiros resultados, em seguida é sorteado um assunto. Após sorteado é criado um arquivo chamado "resultado.txt" com os dizeres "O resultado é: {assunto}"

### Como utilizar?
* Abra uma pasta no VSCode e rode os seguintes comandos no terminal:
```
git init
```
```
gh repo clone rioribeirods/retornar
```
```
cd retornar
```
```
npm init -y
```
```
npm install --save-dev dotenv node express twit
```

* Agora você precisa criar um arquivo .env e colocar as seguintes informações:

<p>apikey = </p>
<p>apikeysecret = </p>
<p>accesstoken = </p>
<p>accesstokensecret = </p>

* Para conseguir essas chaves, é necessário ter uma conta [Twitter Developer](https://developer.twitter.com/en) com acesso Elevated. Com a conta em mãos basta criar um app e gerar as chaves.

* Com as chaves declaradas, rode:

```
npm run start
```

* Abra o Insomnia ou Postman no endereço GET http://localhost:2000/trends e agora é só rodar a requisição! ;)

Qualquer dúvida: rioribeirods@gmail.com
