 
Considerando que o teste em questão era curto, não vi a necessidade de separar cada mapeamento 
e ação em sua respectiva página, porém organizei como se todo mapeamento fosse da mesma página e as ações em outro arquivo para manter o conceito.

O projeto está separado em:

support/locators: Executa as ações de interação com a objetos da página
support/pageobjects: Mapeia os objetos da página
step_definition/teste: Vincula as funções de controle com o bdd
step_definition/*.feature: Cenários em bdd

Para Executar os testes informados será necessário:
1- Baixar e executar o Visual Code Community
2- Clonar o repositorio do github:  https://github.com/ranfcordeiro/testeAdvantageShopping
3- Abrir o terminal dentro do Visual Code
4- Executar o comando: npm install cypress --save-dev (instalar cypress)
5- Executar o comando: npm install cypress-cucumber-preprocessor --save-dev (instalar cucumber)
6- Abrir o projeto no testeAdvantageShopping no Visual Code
7- Executar o comando: npm test (execução assistida) ou npm cy:tesHeadless (execução não assistida)
8- Selecionar E2E (assistida)
9- Executar o teste desejado clicando sobre a feature (assistida)

Considerações:

O teste de Api (atualizarImagemProduto.feature) não foi realizado no mesmo formato, apesar de ser possível
Não foi possível realizar o cadastro do usuário para atualizarImagemProduto.feature
