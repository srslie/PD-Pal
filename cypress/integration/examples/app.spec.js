/* eslint-disable no-undef */
/// <reference types="cypress" />
const baseUrl = 'http://localhost:3000/'
const apiUrl = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=1a060a0c&app_key=4867681585b99bffc654ca5c4768c20c&results_per_page=20&what=javascript&content-type=application/json'

describe('App', () => {

  beforeEach(() => {
    cy.fixture('jobs.json')
    .then((data) => {
      cy.intercept(
        'GET', 
        apiUrl,
        { statusCode: 200,
          body: data
        })
    })
    cy.visit(baseUrl)
  })    

  it('Should have a loading page', () =>{
    cy.visit(baseUrl)
    cy.get('.loading').children('.loading-text')
      .get('.loading-text').should('have.text', 'Loading...')
  })
  
  it('Should have a header with links to home view, saved, and applied to jobs', () =>{
    cy.get('.header').children('.header-links')
      .get('.header-links').children('.logo', '.saved-link', '.applied-link', '.account-link')
      .get('.account-link').click()
      cy.url().should('include', '/account')
      .get('.applied-link').click()
      cy.url().should('include', '/applied')
      .get('.saved-link').click()
      cy.url().should('include', '/saved')
      .get('.logo').children('.logo-button')
      .get('.logo-button').click()
      cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should have a footer with links to about and resources pages', () =>{
    cy.get('.footer').children('.about-link', '.resources-link')
      .get('.about-link').click()
      cy.url().should('contain', '/about')
      .get('.resources-link').click()
      cy.url().should('contain', '/resources')
  })

  it('Should have a home display with values and all jobs', () =>{
    cy.get('.home').children('.job-listings').children('.job-card')
      .get('.job-card:first').should('have.id', '2035955654').children('.job-title', '.company-info', '.date-posted', '.location')
  })

  it('Should let users to see more details on a secific job', () => {})

  it('Should let users save a job or mark a job as applied to', () => {})

  it('Should show users name and values and have button to update on first load', () => {
    cy.get('.values').children('.values-text').children('.values-title', 'values-info')
      .get('.values-title').should('have.text', 'Your Values:')
      .get('.values-info').should('have.text', 'What are you working for?')
  })

  it('Should let users update their name and job values in an account page', () => {
    cy.get('.account-link').click()
      
  })

  it('Should have an about page', () =>{
    cy.get('.about-link').click()
    cy.url().should('contain', '/about')
  })

  it('Should have a page with resources for PD', () =>{
    cy.get('.resources-link').click()
    cy.url().should('contain', '/resources')
  })

  it('Should allow users to see saved jobs', () => {
    cy.get('.saved-link').click()
    cy.url().should('contain', '/saved')
  })

  it('Should allow users to see jobs they applied to', () =>{
    cy.get('.applied-link').click()
    cy.url().should('contain', '/applied')
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
      cy.url().should('eq', 'http://localhost:3000/')
  })
})