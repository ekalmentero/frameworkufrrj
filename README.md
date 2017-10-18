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
