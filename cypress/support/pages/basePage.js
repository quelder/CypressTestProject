export class BasePage {

    open(url){
        cy.visit(url)
    }

    loginClient(id){
        cy.contains('Customer Login').click()
            .get('select').select('2').should('have.value', id)
            .get('form').submit()
    }

    checkAccount(name, currencyId, amount, currency){
    cy.get('.ng-binding').eq(0).should('have.text', name)
            .get('.ng-binding').eq(1).should('have.text', currencyId)
            .get('.ng-binding').eq(2).should('have.text', amount)
            .get('.ng-binding').eq(3).should('have.text', currency)
    }

    replenishmentAndCheck(amount){
        cy.get('button[ng-click="deposit()"]').click()
        cy.get('input[ng-model="amount"]').type(amount)
            .get('form').submit()
            .get('.ng-binding').eq(2).should('have.text', amount)
    }

    enterLoginAndPassword(login, password){
        cy.get('#user-name').type(login)
            .get('#password').type(password)
            .get('#login-button').click()
    }
}

export const basePage = new BasePage()
