/* eslint-disable no-undef */
/// <reference types="cypress" />

cy.describe('App', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000')
  })
  
  it('Should have a header with links to home view, saved, and applied to jobs', () =>{})
  it('Should have a footer with links to about and resources pages', () =>{})
  it('Should have a home display with values and all jobs', () =>{})
  it('Should let users to see more details on a secific job', () => {})
  it('Should let users save a job or mark a job as applied to', () => {})
  it('Should let users update their name and job values in an account page', () => {})
  it('Should have an about page', () =>{})
  it('Should have a page with resources for PD', () =>{})
  it('Should allow users to see saved jobs', () => {})
  it('Should allow users to see jobs they applied to', () =>{})
  it('Should have a loading page', () =>{})
  it('Should redirect to a 404 page for unknown urls', () =>{
    cy.visit('http://localhost3000/sheep')
  })
});