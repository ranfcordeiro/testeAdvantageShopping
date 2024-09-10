import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("executo a api para pesquisar o produto {string}, o sistema encontra {string}", (produto,modelo) => {
  cy.request({
    method: 'GET',
    url: "https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name="+produto+"&quantityPerEachCategory=-1",
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
      'name': 'mouse'
    }
  }).then(resp => {
    expect(resp.status).to.eq(200)
    expect(resp.allRequestResponses[0]["Response Body"]).contains(modelo)
  })
 
})

