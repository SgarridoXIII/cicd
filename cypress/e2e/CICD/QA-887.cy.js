Cypress.on('uncaught:exception', (err, runnable) => { return false; });
/// <reference types="cypress" />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'
const asesor = 'Alberto Chicote'
const dia = '18'
const photo = 'polo.png'


describe('Test QA-887 Crear vehículo_obligatoriedad campos_Marca', () => {


    it("Step 1", () => {
  
      cy.visit("/",)
      cy.wait(1000)
  
    })
    
    it("Step 2", () => {
      cy.get("#username").type("sergio.garrido@siigroup-spain.com") 
      cy.get("#password").type("Godella21!con") 
      cy.get('#passwordTab > form > :nth-child(4) > .btn').should("be.visible").click()
      cy.wait(2000) //Fin login
    })
    
    it("Step 3", () => {
        cy.get('svg.mat-menu-trigger.top-navigation-bar__actions__icon').click();


    })
    it("Step 4", () => {
        cy.get('.mat-menu-content > :nth-child(4)').click().wait(1000)

      
    })
    
    it("Step 5", () => {
             const generateMatricula = () => {
                const suffix = 'ABC'
                const prefix = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
                return `${prefix}${suffix}`
              }
              const matricula = generateMatricula()
          
              cy.wait(1000)
            //   cy.get('#mat-menu-panel-2 > div > button:nth-child(4)').click()
              cy.get(':nth-child(1) > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(matricula)
              cy.get(':nth-child(10) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > input').type('100')
            //   cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
            //   cy.get('#mat-option-63 > .mat-option-text').click({ force: true })
              cy.get('#mat-input-10').should('be.visible').click()
              cy.wait(1500)
              cy.contains('Golf Advance').click({ force: true })
              cy.wait(10000)
              cy.get('#mat-input-11').should('be.visible').click().wait(5000).type('1.9TDi')
              cy.get('body').click()

              cy.get('#mat-input-16').click().clear().type('Sergio{enter}')
              cy.wait(10000)
              cy.contains('Sergio').click()
              cy.wait(1000)
              cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-arrow-wrapper').click({ force: true })
              cy.wait(5000)
              cy.get('#mat-option-107 > .mat-option-text').click({ force: true })
              cy.get('#mat-option-108 > .mat-option-text').click({ force: true })
              cy.get('#mat-option-109 > .mat-option-text').click({ force: true })
              cy.get('body > div.cdk-overlay-container > div.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').click({ force: true })
              cy.get('body > app-root > main > one-layout-application > div > div > one-create-vehicles > form > div.row.mt-4.ng-valid.ng-dirty.ng-touched > div.col-md-2.d-flex.align-items-center.mb-1 > div > svg:nth-child(1)').click()
            cy.get('.btn__primary').should('be.disabled')

              cy.wait(3000)
    })
  
 
  
 
    it("Logout", () => {
        cy.wait(3000)
        cy.visit('/')
        cy.get('.top-navigation-bar__actions > .userIcon').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()
        cy.wait(1000) 
      })//Fin logout
})