describe('Busca por voos', () => {

    context('Não Logado', () => {
        const massaVoos = require('../../fixtures/massaVoos')

        beforeEach(() => {
            cy.visit('/') // acessa a baseURL = Home do Blazedomo
        })

        it('Buscar voos entre São Paolo e Cairo - Simples', () => {
            // Verificar se estamos na página correta
            cy.title().should('eq', 'BlazeDemo') // titulo da guia deve ser igual a BlazeDemo

            cy.get('select.form-inline')
                .eq(0) // o primeiro elemento que tem esse css selector
                .select('São Paolo') // cidade de origem

            cy.get('select.form-inline')
                .eq(1) // o segundo elemento que tem esse css selector
                .select('Cairo') // cidade de destino

            cy.get('input.btn.btn-primary')
                .click() // clica no botão selecionar voos

            // carregar a página de seleção de voos

            // Validar o titulo da guia e a frase cabeçalho
            cy.title().should('eq', 'BlazeDemo - reserve')

            cy.get('.container h3').should('have.text', 'Flights from São Paolo to Cairo: ')

        }) // fecha it


        massaVoos.array.forEach(({ origem, destino }) => {
            it(`Buscar voos entre ${origem} e ${destino} - Data Driven`, () => {
                // Verificar se estamos na página correta
                cy.title().should('eq', 'BlazeDemo') // titulo da guia deve ser igual a BlazeDemo

                cy.get('select.form-inline')
                    .eq(0) // o primeiro elemento que tem esse css selector
                    .select(origem) // cidade de origem

                cy.get('select.form-inline')
                    .eq(1) // o segundo elemento que tem esse css selector
                    .select(destino) // cidade de destino

                cy.get('input.btn.btn-primary')
                    .click() // clica no botão selecionar voos

                // carregar a página de seleção de voos

                // Validar o titulo da guia e a frase cabeçalho
                cy.title().should('eq', 'BlazeDemo - reserve')

                cy.get('.container h3').should('have.text', `Flights from ${origem} to ${destino}: `)

            }) // fecha it
        }) // fecha massaVoos

    }) // fecha context

}) // fecha describe