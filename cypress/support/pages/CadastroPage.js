//**********Mapeamento de elementos**********
const el = {
    nomeFiel: '[data-testid="nome"]',
    emailFiel: '[data-testid="email"]',
    senhaFiel: '[data-testid="password"]',
    cadastreseButton: '[data-testid="cadastrar"]',
    cadastrarButton: '[data-testid="cadastrar"]',
  }

//**********Ações**********
class CadastroPage {

  
  preencherNome(nome){
    cy.get(el.nomeFiel).type(nome);
  }
  
  preencherEmail(email){
    cy.get(el.emailFiel).type(email);
  }

  preencherSenha(senha){
    cy.get(el.senhaFiel).type(senha);
  }

  clicarEmCadastreSe(){
    cy.get(el.cadastreseButton).click({ force: true })
  }

  clicarEmCadastrar(){
    cy.get(el.cadastrarButton).click({ force: true })
  }

}

export default new CadastroPage();