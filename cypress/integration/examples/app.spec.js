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
        cy.url().should('contain', '/saved')
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
      .get('.job-card:first').should('have.id', '2035955654').children('.job-title', '.company-info', '.date-posted', '.location', '.details-link')
      .get('.job-title:first').should('have.text', 'JavaScript UI Developer')
      .get('.company-info:first').should('have.attr', 'href', 'https://www.adzuna.com/land/ad/2035955654?se=8pTvaQN_6xGyC4uzethhzQ&utm_medium=api&utm_source=a7e24f78&v=C1A3EF48805442E5037CBEC0E4117FFA0DD45192')
        .get('.company-info:first').children('.company-name')
      .get('.company-name:first').should('have.text', 'General Dynamics Information Technology')
      .get('.date-posted:first').should('have.text', 'Posted: 2021-03-06')
      .get('.location:first').should('have.text', 'Bossier City, Bossier Parish')
      .get('.details-link:first').children('.details-button')
      .get('.details-button:first').should('have.text', 'More Details').click()
        cy.url().should('contain', '/job/2035955654')
  })

  it('Should let users to see more details on a secific job', () => {
    cy.get('.details-button:first').click()
    cy.url().should('contain', '/job/2035955654')
    cy.get('.job-detail').children('.job-detail-card')
      .get('.job-detail-card').children('.title', '.company', '.date-posted', '.location', '.full-info-link', '.description', '.user-interations')
        .get('.title').should('have.text', 'JavaScript UI Developer')
        .get('.company').should('have.text', 'General Dynamics Information Technology')
        .get('.date-posted').should('have.text', 'Posted: 2021-03-06')
        .get('.location').should('have.text', 'Bossier City, Bossier Parish')
        .get('.full-info-link').should('have.attr', 'href', 'https://www.adzuna.com/land/ad/2035955654?se=8pTvaQN_6xGyC4uzethhzQ&utm_medium=api&utm_source=a7e24f78&v=C1A3EF48805442E5037CBEC0E4117FFA0DD45192')
        .get('.description').should('have.text', '...  of UI development experience. Experience with a modern JS framework and Typescript, as well as CSS for styling the look and feel. Experience with React and/or Angular JavaScript tools ...  (preferably React). Preferred Qualifications: Four (4) years of UI development experience Experience with ArcGIS JavaScript libraries Experienced in building GUI with SWING and web ...' )
        .get('.user-interactions').children('.save-button', '.applied-button')
          .get('.save-button').should('have.text', 'Save')
          .get('.applied-button').should('have.text', 'Mark Applied')
  })

  it('Should let users save a job or mark a job as applied to', () => {
    cy.get('.details-button:first').click()
      .get('.save-button').should('have.text', 'Save').click()
        .get('.save-button').should('have.text', 'Saved!').should('have.class', 'marked').click()
      .get('.applied-button').should('have.text', 'Mark Applied').click()
        .get('.applied-button').should('have.text', 'Applied!').should('have.class', 'marked').click()
  })

  it('Should show users name and values and have button to update on first load', () => {
    cy.get('.values').children('.values-text').children('.values-title', 'values-info')
      .get('.values-title').should('have.text', 'Your Values:')
      .get('.values-info').should('have.text', 'What are you working for?')
  })

  it('Should let users update their name and job values in an account page', () => {
    cy.get('.account-link').click()
      cy.url().should('contain', '/account')
      cy.get('.account').children('.account-name', '.account-values')
        .get('.account-name').children('.account-name-title', '.name-input')
          .get('.account-name-title').should('have.text', 'Your Account')
          .get('.name-input').type('Alice')
            .get('.name-button').click()
              .get('.account-name-title').should('have.text', "Alice's Account")
                cy.get('.values-title').should('have.text', "Alice's Values:")
        .get('.account-values').children('.account-values-title', '.account-values-text', '.values-input')
          .get('.account-values-title').should('have.text', 'Values')
          .get('.account-values-text').should('have.text', 'What are you working for?')
          .get('.values-input').type('Food and Stuff')
            .get('.values-button').click()
              .get('.account-values-text').should('have.text', "Food and Stuff")
              cy.get('.values-info').should('have.text', "Food and Stuff")
  })

  it('Should have an about page', () =>{
    cy.get('.about-link').click()
      cy.url().should('contain', '/about')
      cy.get('.about').children('.about-title', '.about-info')
        .get('.about-title').should('have.text', 'About PD-Pal')
        .get('.about-info').should('contain', 'This was the final solo project for Mod 3.').children('.alice-link', '.turing-link')
          .get('.alice-link').should('have.attr', 'href', 'https://github.com/srslie')
          .get('.turing-link').should('have.attr', 'href', 'https://turing.io' )
  })

  it('Should have a page with resources for PD', () =>{
    cy.get('.resources-link').click()
      cy.url().should('contain', '/resources')
      cy.get('.resources').children('.resources-title', '.resources-info', '.pd-link')
        .get('.resources-title').should('have.text', 'Professional Development Resources')
        .get('.resources-info').should('contain', 'Turing School empahasizes professional development.').children('.pd-link').should('have.attr', 'href', 'https://github.com/turingschool/career-development-curriculum')
          .get('.pd-link-button').should('have.text', 'Find out more!')
  })

  it('Should allow users to see saved jobs', () => {
    cy.get('.details-link:first').click()
      .get('.user-interactions')
        .get('.save-button').should('have.text', 'Save').click()
        .get('.saved-link').click()
          cy.url().should('contain', '/saved')
          .get('.job-card').should('have.id', '2035955654')
  })

  it('Should allow users to see jobs they applied to', () =>{
    cy.get('.details-link:first').click()
      .get('.user-interactions')
        .get('.applied-button').should('have.text', 'Mark Applied').click()
        .get('.applied-link').click()
          cy.url().should('contain', '/applied')
          .get('.job-card').should('have.id', '2035955654')
  })

  it('Should redirect to a 404 page for unknown urls', () =>{
    cy.visit('http://localhost:3000/sheep')
      cy.get('.not-found').children('.not-found-overlay')
        .get('.not-found-overlay').children('.not-found-code', '.not-found-title', '.home-link')
        .get('.not-found-code').should('have.text', '404:')
        .get('.not-found-title').should('have.text', 'Sorry, page not found.')
        .get('.home-link').children('.home-link-button')
        .get('.home-link-button').click()
      cy.url().should('eq', 'http://localhost:3000/')
  })
})

describe('Failure', () => {
  it.only('Should show an error page if fetch fails', () => {
    cy.intercept(
      'GET', 
      apiUrl,
      { statusCode: 400}
    )
    cy.visit(baseUrl)
    cy.get('.error').children('.error-text', '.contact-link')
      .get('.error-text').should('have.text', 'Sorry, error: Bad Request. Try reloading!')
      .get('.contact-link').should('have.attr', 'href', 'mailto:aliceruppert@gmail.com').children('.contact-button')
        .get('.contact-button').should('have.text', 'Contact for more support!')
  })
  
})