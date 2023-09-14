// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Texto_visible", (selector,texto,t)=>{
    let tiempo=t
    cy.get(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add("click_normal", (selector,t)=>{
    let tiempo=t
    cy.get(selector).should("be.enable").click()
    cy.wait(tiempo)
})

Cypress.Commands.add("click_force", (selector,t)=>{
    let tiempo=t
    cy.get(selector).should("be.enable").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add("xpath_texto", (selector,texto,t)=>{
    let tiempo=t
    cy.xpath(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
})


Cypress.Commands.add("xpath_click", (selector,t)=>{
    let tiempo=t
    cy.xpath(selector).should("be.enable").click()
    cy.wait(tiempo)
})


Cypress.Commands.add("xpath_force", (selector)=>{
    let tiempo=t
    cy.xpath(selector).should("be.enable").click({force:true})
    cy.wait(tiempo)
})




/////////////////////////////////////////////////////////////////////////////
//reto custom

Cypress.Commands.add('Reto_custom', (nom,ape,email,tel,dire,city,estado,cp,url,t) => {
    let tiempo=t
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').should("be.enabled").type(nom).wait(t)
    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(ape).wait(t)
    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(email).wait(t)
    cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(tel).wait(t)
    cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(dire).wait(t)
    cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(city).wait(t)
    cy.xpath("//select[contains(@name, 'state')]").select(estado).wait(t)
    cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(cp).wait(t)
    cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(url).wait(t)
    cy.get(':nth-child(2) > label > input').click().wait(t)
    cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type("Me cago y me meo").wait(t)
    cy.get('.btn').click()









})