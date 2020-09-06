describe('User can see list of work XPs and Education', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.get("#cv-tab").click()
  })

  it('displays the first work XP', () => {
    cy.get("#workExperience-1").within(() => {
      cy.get(".header").should('contain', 'Repair Partner')

    })
  })

  it('displays the second work XP', () => {
    cy.get("#workExperience-2").within(() => {
      cy.get(".header").should('contain', 'Geographic Information System Intern')
      
    })
  })

  // it('displays the first education', () => {
  //   cy.get("#education-1").within(() => {
  //     cy.get(".header").should('contain', 'Coding Bootcamp')
      
  //   })
  // })

  // it('displays the second education', () => {
  //   cy.get("#education-2").within(() => {
  //     cy.get(".header").should('contain', 'Agricultural Engineer, Business and Management')
      
  //   })
  // })

  // it('displays the third education', () => {
  //   cy.get("#education-3").within(() => {
  //     cy.get(".header").should('contain', 'Student exchange')
      
  //   })
  // })
})