# Framework UFRRJ

Framework para o desenvolvimento de sistemas baseados no contexto da UFRRJ

# Config
```
    $ npm i   --   para instalar os componentes necessários
    $ npm start   --   para iniciar
```
# Componente BD

 As funções do componente retornam um array com as colunas da tabela

```
 import BD from './BD'

 BD.query("...").then((retorno)=>{
    [...]
 });
```

 Também é possível passar um objeto como parametro como em:

```
 var temp = new Aluno();
 tempo.setNome("Bruno");

 BD.buscar(temp).then((retorno) => {
   [...]
 });
```

 Que equivale a executar um : SELECT * FROM Aluno WHERE nome = Bruno

# Padrão de nomeclatura para os métodos básicos do DAO

- create -- para inserir no banco
- update -- atualizar registro no banco
- read -- ler registro do banco a partir do id
- readAll -- ler todos os registros do banco
- delete -- remover o registro no banco a partir do id

# Padrão de uso dos métodos de request

- post -- criar 
- path -- atualizar
- delete -- remover
- get/:id -- buscar por id
- get/.... - busca refinada

