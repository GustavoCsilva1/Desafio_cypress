describe('Fill in the Enter vehicle data form', () => {
    it('User must be able to fill out the form', () => {
        cy.viewport(1366, 768)
        cy.visit('http://sampleapp.tricentis.com/101/app.php')
        cy.get('#entervehicledata').should('have.text', 'Enter Vehicle Data12')

        cy.get('#make').select([2])
        cy.get('#model').select([3])
        cy.get('#cylindercapacity').type('30')
        cy.get('#engineperformance').type('100')
        cy.get('#dateofmanufacture').type('10/13/2022')
        cy.get('#numberofseats').select([3])
        cy.get('p  .ideal-radiocheck-label  #righthanddriveyes').check({ force: true })
        cy.get('#numberofseatsmotorcycle').select([2])
        cy.get('#fuel').select([2])
        cy.get('#payload').type('10')
        cy.get('#totalweight').type('100')
        cy.get('#listprice').type('500')
        cy.get('#licenseplatenumber').type('100')
        cy.get('#annualmileage').type('250')
        cy.get('#nextenterinsurantdata').click()
    })
})

describe('Fill in the Enter Insurant Data form', () => {
    it('User must be able to fill out the form', () => {
        cy.get('#enterinsurantdata').should('have.text', 'Enter Insurant Data7')
        cy.get('#firstname').type('Gustavo')
        cy.get('#lastname').type('Costa')
        cy.get('#birthdate').type('04/18/2001')
        cy.get('p  .ideal-radiocheck-label #gendermale').check({ force: true })
        cy.get('#streetaddress').type('Rua maria martins batista')
        cy.get('#country').select([31])
        cy.get('#zipcode').type('11722050')
        cy.get('#city').type('Praia Grande')
        cy.get('#occupation').select([3])
        cy.get('p .ideal-radiocheck-label #speeding').check({ force: true })
        cy.get('p .ideal-radiocheck-label #bungeejumping').check({ force: true })
        cy.get('p .ideal-radiocheck-label #other').check({ force: true })
        cy.get('#website').type('https://teste.com.br')
        cy.get('.ideal-file-upload').attachFile('desafio.webp')
        cy.get('#nextenterproductdata').click()

    })
})

describe('Fill in the Enter Product Data form', () => {
    it('User must be able to fill out the form', () => {
        cy.get('#enterproductdata').should('have.text', 'Enter Product Data6')
        cy.get('#startdate').type('02/16/2023')
        cy.get('#insurancesum').select([4])
        cy.get('#meritrating').select([10])
        cy.get('#damageinsurance').select([3])
        cy.get('label #LegalDefenseInsurance').check({ force: true })
        cy.get('#courtesycar').select([2])
        cy.get('#nextselectpriceoption').click()
    })
})

describe('Fill in the Select Price Option', () => {
    it('User must be able to complete the form', () => {
    cy.get('#selectpriceoption').should('have.text', 'Select Price Option1')
    cy.get('label #selectgold').check({ force: true })
    cy.get('#nextsendquote').click()
    })
})

describe('Fill in the Send Quote form', () => {
    it('User must be able to fill out the form', () => {
        cy.get('#sendquote').should('have.text', 'Send Quote4')
        cy.get('#email').type('gustavobcs1@hotmail.com')
        cy.get('#phone').type('13988124563')
        cy.get('#username').type('gustavo0')
        cy.get('#password').type('Gustavo123')
        cy.get('#confirmpassword').type('Gustavo123')
        cy.get('#Comments').type('Foi um prazer realizar este desafio!!')
        cy.get('#sendemail').click()
        
    })
})

describe('Valid message Sending e-mail success!', () => {
    it('I must verify the email message sent successfully', () => {
    cy.get('div h2', {timeout: 30000} ).should('have.text', 'Sending e-mail success!')
    })
})