// active IntelliSense
/// <reference types="Cypress" />

describe('e2e: login validation', () => {

    beforeEach( () => {
        cy.visit('/')
    })

    it('should show username is required warning message', () => {
        cy.get('button').click()
        cy.contains('Username is required')
    })

    it('should show password is required warning message', () => {
        cy.get(':nth-child(1) > input').type('admin')
        cy.get('button').click()
        cy.contains('Password is required')
    })

    it('should show incorrect login or password warning message', () => {
        cy.get(':nth-child(1) > input').type('admin')
        cy.get(':nth-child(2) > input').type('wrong-password')
        cy.get('button').click()
        cy.contains('Username or Password incorrect !')
    } )
    
    it('should show success login message', () => {
        cy.get(':nth-child(1) > input').type('admin')
        cy.get(':nth-child(2) > input').type('admin')
        cy.get('button').click()
        cy.contains('Credentials are correct !')
    })
})
