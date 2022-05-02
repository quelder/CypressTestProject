export class ProductsAndCart {

    checkFilter(value) {
        cy.get('[data-test="product_sort_container"]').select(value)
    }

    checkPrice(alias, index, price) {
        cy.get(alias).eq(index).should('have.text', price)
    }

    checkAndAddToCart(alias, text){
        cy.get(alias).should('have.text', text).click()
        cy.get('.shopping_cart_badge').should('have.text', 1)
    }

    enterToCart(alias){
        cy.get(alias).click()
    }

    checkQtyAndDescription(qty, text){
        cy.get('.cart_quantity').should('have.text', qty)
            .get('.inventory_item_name').should('have.text', text)
    }

    removeFromCart(alias, text){
        cy.get(alias).should('have.text', text).click()
            .get('.shopping_cart_badge')
            .should('not.exist');
        cy.get('#continue-shopping').click()
    }

    checkout(){
        cy.get('#checkout').click()
    }

    formFilling(firstName, lastName, postalCode){
        cy.get('#first-name').type(firstName)
            .get('#last-name').type(lastName)
            .get('#postal-code').type(postalCode)
            .get('#continue').click()
    }

    checkOverview(qty, text,alias,index,price){
        cy.get('.cart_quantity').should('have.text', qty)
            .get('.inventory_item_name').should('have.text', text)
        cy.get(alias).eq(index).should('have.text', price)

    }

    checkSummaryInfo(price, tax, total){
        cy.get('.summary_subtotal_label').contains(price)
            .get('.summary_tax_label').contains(tax)
            .get('.summary_total_label').contains(total)
    }

    finish(){
        cy.get('#finish').click()
    }

    complete(headerText, text){
        cy.get('.complete-header').should('have.text', headerText)
            .get('.complete-text').should('have.text', text)
            .get('#back-to-products').click()
    }

    logout(){
        cy.get('#react-burger-menu-btn').click()
            .get('#logout_sidebar_link').click()
    }
}

export const productsAndCart = new ProductsAndCart();
