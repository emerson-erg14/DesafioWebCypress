//<reference types="Cypress"/>


import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';
import produtoPage from '../../support/pages/ProdutoPage.js'
import cadastroPage from '../../support/pages/CadastroPage.js'

describe('desafioWebTest', ()=>{
    
    
    beforeEach(()=>{
        cy.visit(Cypress.config('url'))  
    })

    it.skip('RealizarLoginSucesso', ()=>{
        //Parametros (Arrange)
        var email = Cypress.config('email')
        var senha = Cypress.config('senha')
        var expectedText = "Serverest Store"

        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherEmail(email)
        loginPage.preencherSenha(senha)
        loginPage.clicarLogar()

        //Validacao (Assert)
        homePage.validarTituloHome(expectedText);   
    })


    it.only('RealizarCadastroSucesso', ()=>{
        //Parametros (Arrange)
        var nome = "DesafioWeb"
        var email = "teste@desafio.com"
        var senha = "123456"
        var mensagemEsperadaText = "Serverest Store"

        //Uso dos métodos das classes de Page (Acts)
        cadastroPage.clicarEmCadastreSe()
        cadastroPage.preencherNome(nome)
        cadastroPage.preencherEmail(email)
        cadastroPage.preencherSenha(senha)
        cadastroPage.clicarEmCadastrar()
        
        //Validacao (Assert)
        homePage.validarTituloHome(mensagemEsperadaText);    
    })


    it.skip('PesquisarProdutoSucesso', ()=>{
        //Parametros (Arrange)
        var email = Cypress.config('email')
        var senha = Cypress.config('senha')
        var produtoEsperadoText = "Produto Teste 1736932369883"
        var mensagemEsperadaText = "Produto Teste 1736932369883"
        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherEmail(email)
        loginPage.preencherSenha(senha)
        loginPage.clicarLogar()
        produtoPage.preencherNomeProduto(produtoEsperadoText)
        produtoPage.clicarEmPesquisar()


        //Validacao (Assert)
        produtoPage.validarPesquisaSucesso(mensagemEsperadaText);   
    })

})
