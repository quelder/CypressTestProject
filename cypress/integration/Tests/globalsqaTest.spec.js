/// <reference types="Cypress" />

import {basePage} from "../../support/pages/basePage";

it('Enter, replenishment and check deposit', () => {
    basePage.open('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    basePage.loginClient('2')
        cy.wait(1000)
    basePage.checkAccount('Harry Potter','1004 ', '0', 'Dollar')
    basePage.replenishmentAndCheck(100)
})
