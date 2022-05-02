/// <reference types="Cypress" />

import {basePage} from "../../support/pages/basePage";

it('Mock data example', ()=>{
    cy.intercept('https://jsonplaceholder.typicode.com/posts',{
        fixture: 'posts.json'});
   basePage.open('https://jsonplaceholder.typicode.com/')
    cy.get('a[href*="/posts"]').eq(0).click()
})
