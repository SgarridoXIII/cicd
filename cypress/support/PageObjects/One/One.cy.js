class one {
    
    generarDNI() {
        var numero = Math.floor(Math.random() * 100000000); 
        var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        var letra = letras.charAt(numero % 23); 
        
        var dni = numero.toString().padStart(8, '0') + letra;
        return dni
    }

    matricula() {
        const letrasPermitidas = 'BCDFGHJKLMNPRSTVWXYZ';
        const numeros = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
        const letras = Array.from({ length: 3 }, () => letrasPermitidas.charAt(Math.floor(Math.random() * letrasPermitidas.length)));
        return numeros.join('') + letras.join('');
        
    }
    
    login(user, pass) {
        cy.visit("/",)
        cy.get("#username").type(user)
        cy.get('#password').type(pass)
        cy.get('#kc-login').click()
        
     }

    crear_vehiculo() {
        cy.get('svg.mat-menu-trigger:nth-child(3)').click()
        
        cy.contains(" Crear vehículo ").click()
    }

    campo_matricula() {
        this.matriculaGenerada = this.matricula();
        cy.get(':nth-child(1) > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(this.matriculaGenerada);
    }

    kilometraje(kms) {
        cy.get(':nth-child(10) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(kms)
    }

    marca(brand) {
        const opcion = brand
        const selectorXpath = `//span[@class='mat-option-text'][contains(.,'${opcion}')]`;
        cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.xpath(selectorXpath).click({ force: true });
    }

    modelo(model) {
        const opcion = model
        cy.get('#mat-input-10').should('be.visible').click()
        
        cy.contains(model).should('be.visible').click({ force: true })
        
    }

    version(vers) {
        const opcion = vers
        cy.get('#mat-input-11').should('be.visible').click().type(vers)
    }

    relacion_cliente_vehiculo(cliente) {
        cy.get('body').click()
        cy.get('#mat-input-16').click().clear().type(cliente + "{enter}")
        cy.get('body').click()
        cy.wait(10000)
        cy.get('#mat-input-16').click()
        cy.contains(cliente).click()

        cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-arrow-wrapper').click({ force: true })
        cy.get('#mat-option-107 > .mat-option-text').click({ force: true })
        cy.get('#mat-option-108 > .mat-option-text').click({ force: true })
        cy.get('#mat-option-109 > .mat-option-text').click({ force: true })
        cy.get('body > div.cdk-overlay-container > div.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').click({ force: true })
        cy.get('body > app-root > main > one-layout-application > div > div > one-create-vehicles > form > div.row.mt-4.ng-valid.ng-dirty.ng-touched > div.col-md-2.d-flex.align-items-center.mb-1 > div > svg:nth-child(1)').click()
    }

    Boton_guardar() {
        cy.get('.btn__primary').should('be.enabled').click({ force: true })
    }

    Buscar_vehiculo() {
        cy.contains(' Más ').should('be.visible').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()
        
        //this.campo_matricula(); // Utiliza la función campo_matricula() para ingresar la matrícula generada
     
        cy.get('.mat-form-field-infix').type(this.matriculaGenerada)
        cy.get('.card-vehicle__content').should('be.visible')
    }
    
    crear_cliente() {
        cy.get('svg.mat-menu-trigger:nth-child(3)').click()
       
        cy.contains(" Crear cliente ").click()
    }





    logout() {
        cy.get('.top-navigation-bar__actions > .userIcon').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()

    }

}//final

export default one;
 
// login(user, pass) {
//     cy.visit("/",)
//     cy.get("#username").type(user)
//     cy.get('#password').type(pass)
//     cy.get('#kc-login').click()
//     cy.wait(1000)
//  }

// crear_vehiculo() {
//     cy.get('svg.mat-menu-trigger:nth-child(3)').click()
//     cy.wait(1000)
//     cy.contains(" Crear vehículo ").click()
// }

// campo_matricula() {
//     this.matriculaGenerada = this.matricula();
//     cy.get(':nth-child(1) > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(this.matriculaGenerada);
// }

// kilometraje(kms) {
//     cy.get(':nth-child(10) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(kms)
// }

// marca(brand) {
//     const opcion = brand
//     const selectorXpath = `//span[@class='mat-option-text'][contains(.,'${opcion}')]`;
//     cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
//     cy.xpath(selectorXpath).click({ force: true });
// }

// modelo(model) {
//     const opcion = model
//     cy.get('#mat-input-10').should('be.visible').click()
//     cy.wait(3000)
//     cy.contains(model).should('be.visible').click({ force: true })
//     cy.wait(3000)
// }

// version(vers) {
//     const opcion = vers
//     cy.get('#mat-input-11').should('be.visible').click().wait(5000).type(vers)
// }

// relacion_cliente_vehiculo(cliente) {
//     cy.get('body').click()
//     cy.get('#mat-input-16').click().clear().type(cliente + "{enter}")
//     cy.get('body').click()
//     cy.wait(10000)
//     cy.get('#mat-input-16').click()
//     cy.contains(cliente).click()
//     cy.wait(10000)
//     cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-arrow-wrapper').click({ force: true })
//     cy.get('#mat-option-107 > .mat-option-text').click({ force: true })
//     cy.get('#mat-option-108 > .mat-option-text').click({ force: true })
//     cy.get('#mat-option-109 > .mat-option-text').click({ force: true })
//     cy.get('body > div.cdk-overlay-container > div.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').click({ force: true })
//     cy.get('body > app-root > main > one-layout-application > div > div > one-create-vehicles > form > div.row.mt-4.ng-valid.ng-dirty.ng-touched > div.col-md-2.d-flex.align-items-center.mb-1 > div > svg:nth-child(1)').click()
// }

// Boton_guardar() {
//     cy.get('.btn__primary').should('be.enabled').click({ force: true })
// }

// Buscar_vehiculo() {
//     cy.contains(' Más ').should('be.visible').click()
//     cy.get('.mat-menu-content > :nth-child(2)').click()
//     cy.wait(5000)
//     //this.campo_matricula(); // Utiliza la función campo_matricula() para ingresar la matrícula generada
//     cy.wait(5000);
//     cy.get('.mat-form-field-infix').type(this.matriculaGenerada).wait(5000)
//     cy.get('.card-vehicle__content').should('be.visible')
// }

// crear_cliente() {
//     cy.get('svg.mat-menu-trigger:nth-child(3)').click()
//     cy.wait(1000)
//     cy.contains(" Crear cliente ").click()
// }