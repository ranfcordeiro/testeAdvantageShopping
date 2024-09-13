/// <reference types="cypress" />

import { mHome } from "../Elements/eHome"



class home {
    acessarUrl() {
        cy.visit(mHome.url.urlAdvantageShopping)
        cy.wait(2000)
        cy.get(mHome.botoes.continuarComprando).click()
        cy.wait(2000)
    }

    clicarLupaPesquisa() {
        cy.get(mHome.botoes.lupa)
            .should('be.visible')
            .click()
        cy.wait(2000)
    }

    informarPesquisa(produto) {
        cy.get(mHome.campos.txtPesquisa)
            .clear()
            .type(produto)
        cy.wait(2000)
    }

    clicoNoProduto() {
        cy.get(mHome.botoes.btnMouse)
            .should('be.visible')
            .click()
        cy.wait(2000)
    }

}
export default new home