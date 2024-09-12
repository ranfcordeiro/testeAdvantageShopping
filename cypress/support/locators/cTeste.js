/// <reference types="cypress" />

import { mTeste } from "../pageobjects/mTeste"

class control {
    acessarUrl() {
        cy.visit(mTeste.url.urlAdvantageShopping)
        cy.wait(2000)
        cy.get(mTeste.botoes.continuarComprando).click()
        cy.wait(2000)
    }

    clicarLupaPesquisa() {
        cy.get(mTeste.botoes.lupa)
            .should('be.visible')
            .click()
        cy.wait(2000)
    }

    informarPesquisa(produto) {
        cy.get(mTeste.campos.txtPesquisa)
            .clear()
            .type(produto)
        cy.wait(2000)
    }

    clicoNoProduto() {
        cy.get(mTeste.botoes.btnMouse)
            .should('be.visible')
            .click()
        cy.wait(2000)
    }

    clicoAdicionarCarrinho() {
        cy.get(mTeste.botoes.btnAdicionarCarrinho)
            .should('be.visible')
            .click()
        cy.wait(2000)
    }

    clicoNoCarrinho() {
        cy.get(mTeste.botoes.btnCarrinho)
            .click()
        cy.wait(2000)
    }

    validaProdutoEscolhido(descricao) {
        cy.get(mTeste.labels.descricaoProduto)
            .should('be.visible')
            .contains(descricao)
        cy.wait(2000)
    }

    validaCorProduto() {
        cy.get(mTeste.labels.cor)
            .should('have.css', 'background-color', 'rgb(65, 65, 65)')
        cy.wait(2000)
    }

    validaValorProduto(valor) {
        cy.get(mTeste.labels.valorProduto).then($val => {
            debugger
            let valorObtido = $val[0].innerText
            expect(valorObtido).to.eq(valor)
        })
    }
}
export default new control