import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import cTeste from "../../controle/cTeste.js";

Given("que eu estou no site Advantage Shopping", () => {
    cTeste.acessarUrl()
})

When("clico na lupa de Pesquisa", () => {
    cTeste.clicarLupaPesquisa()
})

And("digito {string} na pesquisa", (produto) => {
    cTeste.informarPesquisa(produto)
})

And("clico no mouse escolhido", () => {
    cTeste.clicoNoProduto()
})

And("clico para adicionar no carrinho", () => {
    cTeste.clicoAdicionarCarrinho()
})

And("clico no carrinho", () => {
    cTeste.clicoNoCarrinho()
})

Then("o sistema deve exibir a descrição {string}", (descricao) => {
    cTeste.validaProdutoEscolhido(descricao)
})

And("com a cor", () => {
    cTeste.validaCorProduto()

})

And("com o valor {string}", (valor) => {
    cTeste.validaValorProduto(valor)

})