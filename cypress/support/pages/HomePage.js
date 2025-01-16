//**********Mapeamento de elementos**********
const el = {
    tituloHomeText: 'h1'
  }

//**********Ações**********
class HomePage {

  validarTituloHome(texto){
    cy.get(el.tituloHomeText).should('contain', texto)
  }

}

export default new HomePage();