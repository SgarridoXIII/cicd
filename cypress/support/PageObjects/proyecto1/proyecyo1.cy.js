class proyecto1 {

    visitHome() {

        before(() => {

            let tiempo = 500
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)

        })

        
     }

    formulario(){


          cy.Reto_custom("Sergio", "Garrido","jojojo@jojo.com","5454545444","Calle pene","Pene","California","54789","wwww.nottoday.com",500) 
             

    }
}// final

export default proyecto1;