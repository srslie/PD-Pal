/* eslint-disable no-undef */
/// <reference types="cypress" />

cy.describe('App', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000')
  })

  it('Should have a loading page', () =>{
    cy.get('.loading').children('.loading-text')
      .get('.loading-text').contains('Loading...')
  })
  
  it('Should have a header with links to home view, saved, and applied to jobs', () =>{
    cy.get('.header').children('.header-links')
      .get('.header-links').children('.logo', '.saved-link', '.applied-link', '.account-link')
      .get('.account-link').click()
      cy.url().should('include', '/account')
      .get('.applied-link').click()
      cy.url().should('include', '/applied')
      .get('saved-link').click()
      cy.url().should('include', '/saved')
      .get('.logo').children('.logo-button')
      .get('.logo-button').click()
      cy.url().should('eq', 'https://localhost:3000/')
  })

  it('Should have a footer with links to about and resources pages', () =>{
    cy.get('.footer').children('.about-link', '.resources-link')
      .get('.about-link').click()
      cy.url().should('contain', '/about')
      .get('resources-link').click()
      cy.url().should('contain', '/resources')
  })

  it('Should have a home display with values and all jobs', () =>{})
  it('Should let users to see more details on a secific job', () => {})
  it('Should let users save a job or mark a job as applied to', () => {})
  it('Should let users update their name and job values in an account page', () => {})
  it('Should have an about page', () =>{})
  it('Should have a page with resources for PD', () =>{})
  it('Should allow users to see saved jobs', () => {})
  it('Should allow users to see jobs they applied to', () =>{
    cy.get('.saved-link').click()
    cy.url().should('contain', '/saved')
    
  })
 
  it('Should redirect to a 404 page for unknown urls', () =>{
    cy.visit('http://localhost:3000/sheep')
      cy.url().should('contain', '/404')
      cy.get('.not-found').children('.not-found-overlay')
        .get('.not-found-overlay').children('.not-found-code', '.not-found-title', '.home-link')
        .get('.not-found-code').should('have.text', '404:')
        .get('.not-found-title').should('have.text', 'Sorry, page not found.')
        .get('.home-link').children('.home-link-button')
        .get('.home-link-button').click()
        url().should('eq', 'https://localhost:3000/')
  })
});