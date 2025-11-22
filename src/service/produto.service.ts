import { produtosApi } from "../api/modules/produtos.api"

export const ProdutoService = {
  async paginarFiltrado(limite: number = 4, categoria: string, ordem: string) {
    const { data } = await produtosApi.paginarFiltrado(limite, categoria, ordem)
    return data
  }
}