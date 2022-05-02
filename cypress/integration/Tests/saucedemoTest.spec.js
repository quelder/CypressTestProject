/// <reference types="Cypress" />

import {basePage} from "../../support/pages/basePage";
import {productsAndCart} from "../../support/pages/productsAndCart";

it('Full cycle of order', () => {
    basePage.open('https://www.saucedemo.com/')
    basePage.enterLoginAndPassword('standard_user', 'secret_sauce')
    productsAndCart.checkFilter('za')
    productsAndCart.checkFilter('lohi')
    productsAndCart.checkFilter('hilo')
    productsAndCart.checkFilter('az')
    productsAndCart.checkPrice('.inventory_item_price', '0', '$29.99')
    productsAndCart.checkAndAddToCart('#add-to-cart-sauce-labs-backpack', 'Add to cart')
    productsAndCart.enterToCart('.shopping_cart_container')
    productsAndCart.checkQtyAndDescription('1', 'Sauce Labs Backpack')
    productsAndCart.checkPrice('.inventory_item_price', '0', '$29.99')
    productsAndCart.removeFromCart('#remove-sauce-labs-backpack', 'Remove')
    productsAndCart.checkAndAddToCart('#add-to-cart-sauce-labs-backpack', 'Add to cart')
    productsAndCart.enterToCart('.shopping_cart_container')
    productsAndCart.checkout()
    productsAndCart.formFilling('I', 'K', '49000')
    productsAndCart.checkOverview('1', 'Sauce Labs Backpack', '.inventory_item_price', '0', '$29.99')
    productsAndCart.checkSummaryInfo('29.99', '2.40', '32.39')
    productsAndCart.finish()
    productsAndCart.complete('THANK YOU FOR YOUR ORDER', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    productsAndCart.logout()
})
