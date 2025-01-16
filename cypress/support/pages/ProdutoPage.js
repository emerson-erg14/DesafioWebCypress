/**************-- Mapeamento --********************/
const el = {
  produtoField: '[data-testid="pesquisar"]',
  pesquisarButton: '[data-testid="botaoPesquisar"]',
  mensagemEsperada: '.card-title',
}
/*****************-- Ações --***********************/
class ProdutoPage {
  preencherNomeProduto(prduto){
      cy.get(el.produtoField).type(prduto)
  }

  clicarEmPesquisar(){
      cy.get(el.pesquisarButton).click({ force: true })
  }

  validarPesquisaSucesso(texto){
      cy.get(el.mensagemEsperada).should('contain', texto)
  }

}
export default new ProdutoPage()

