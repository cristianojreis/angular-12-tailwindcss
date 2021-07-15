# Boilerplate Angular 12 + TailWindCSS criado por Cristiano José dos Reis
Este repositório foi criado com o intuito de fornecer um boilerplate em Angular 12 com TailWindCSS para uso irrestrito, fique a vontade para utilizá-lo, futuramente poderão existir branches com variações deste boilerplate bem como com exemplos de utilização e até algumas branches de estudo, afinal hoje estou voltando a estudar Angular depois de mais de 6 anos minha última atuação com Angular havia sido em 2015, nos últimos 4 anos me dediquei unicamente a biblioteca React (isso falando do mundo Frontend, quem me conhece sabe que 90% da minha carreira é fundamenta em Backend).
Bom é isso ai galera, algumas referências para montagem deste projeto foram:
 - [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.
 - [TailWindCSS](https://tailwindcss.com/)

## Clonando e Instalando Dependências
Execute o seguinte comando para clonar o repositório: `git clone git@github.com:cristianojreis/angular-12-tailwindcss.git`
Para acessar o diretório do clone local do repositório, execute: `cd angular-12-tailwindcss`
Para instalar todas as dependências necessárias, execute: `npm i`
Vejas as próximas instruções para descobrir como interagir com o projeto.


## Rodar em Modo Desenvolvimento
Execute o seguinte comando para deixar o projeto rodando em modo "desenvolvimento" no endereço `http://localhost:4200/`: `ng serve`
Rodando em modo desenvolvimento sempre que qualquer arquivo do projeto sofrer alguma alteração e for salvo a aplicação aberta no navegador será atualizada automáticamente.


## Usando o Recurso de "Scaffolding"
Para gerar um novo componente execute o seguinte comando, alterando o último parametro "component-name" para o nome desejado para seu componente: `ng generate component component-name`
Utilizando o recurso de scaffolding você pode gerar não somente componentes mas todos os tipos de classes oferecidas pelo framework Angular na sua versão 12, veja as possibilidades a seguir: `ng generate directive|pipe|service|class|guard|interface|enum|module`


## Build
Execute o seguinte comando para gerar o build do seu projeto: `ng build`
Após a execução do comando todos os artefatos (arquivos) gerados serão armazenados dentro do diretório `dist/` localizado na raiz do seu projeto.


## Testes Unitários, como rodá-los?
Para rodar os testes unitários basta executar o seguinte comando: `ng test`
A biblioteca padrão de testes no Angular é a [Karma](https://karma-runner.github.io).


## Testes end-to-end, como rodá-los?
Para rodar os testes end-to-end (ponta a ponta) basta executar o seguinte comando: `ng e2e`
Atenção: Esta opção somente funcionará se você configurar, é necessário adicionar qual biblioteca deseja utilizar e também implementar os testes para que a aplicação seja capaz de executá-los como comando acima.


## Considerações Finais
Em caso de dúvidas sobre a utilização do cli do Angular, execute o seguinte comando: `ng help`
Ou se preferir vá direto na [documentação oficial do Angular CLI, clicando aqui](https://angular.io/cli).

Projeto criado incialmente para estudos do profissional Cristiano José dos Reis, o objetivo é se aprofundar no framework Angular nas suas últimas versões, atualmente encontra-se na 12. (14/07/2021)

[Linkedin -> Cristiano José dos Reis](https://www.linkedin.com/in/cristianojreis)