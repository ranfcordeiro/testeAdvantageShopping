/// <reference types="cypress" />

import { eMice } from "../Elements/eMice"


class mice {

    clicoAdicionarCarrinho() {
        cy.get(eMice.botoes.btnAdicionarCarrinho)
            .should('be.visible')
            .click()
        cy.wait(2000)
    }

    clicoNoCarrinho() {
        cy.get(eMice.botoes.btnCarrinho)
            .click()
        cy.wait(2000)
    }

}
export default new mice