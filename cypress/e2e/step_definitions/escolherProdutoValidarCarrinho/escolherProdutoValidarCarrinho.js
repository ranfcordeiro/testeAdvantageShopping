import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import aHome from "../../../support/pageobjects/Action/ahome";
import aMice from "../../../support/pageobjects/Action/aMice";
import aCart from "../../../support/pageobjects/Action/aCart";


Given("que eu estou no site Advantage Shopping", () => {
    aHome.acessarUrl()
})

When("clico na lupa de Pesquisa", () => {
    aHome.clicarLupaPesquisa()
})

And("digito {string} na pesquisa", (produto) => {
    aHome.informarPesquisa(produto)
})

And("clico no mouse escolhido", () => {
    aHome.clicoNoProduto()
})

And("clico para adicionar no carrinho", () => {
    aMice.clicoAdicionarCarrinho()
})

And("clico no carrinho", () => {
    aMice.clicoNoCarrinho()
})

Then("o sistema deve exibir a descrição {string}", (descricao) => {
    aCart.validaProdutoEscolhido(descricao)
})

And("com a cor", () => {
    aCart.validaCorProduto()

})

And("com o valor {string}", (valor) => {
    aCart.validaValorProduto(valor)

})