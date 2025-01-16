/**************-- Mapeamento --********************/
const el = {
  emailField: '[data-testid="email"]',
  senhaField:'[data-testid="senha"]',
  logarButton: '[data-testid="entrar"]',
  pageEsperada: 'h1',
}
/*****************-- Ações --***********************/
class LoginPage {
  preencherEmail(email){
      cy.get(el.emailField).type(email)
  }

  preencherSenha(senha){
      cy.get(el.senhaField).type(senha)
  }

  clicarLogar(){
      cy.get(el.logarButton).click({ force: true })
      cy.wait(5000)
  }

  validarLogin(texto){
      cy.get(el.pageEsperada).should('contain', texto)
  }

}
export default new LoginPage()

