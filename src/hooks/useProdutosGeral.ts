import { useState } from "react"
import type { Produto } from "../types/produto.type"
import { ProdutoService } from "../service/produto.service"

export function useProdutosGeral() {
  const [totalProdutos, setTotalProdutos] = useState<number>()
  const [produto, setProduto] = useState<Produto>()
  const [carregandoProdutos, setCarregandoProdutos] = useState<boolean>(false)

  async function contarTotalProdutos() {
    const resultado = await ProdutoService.contarProdutos()
    setTotalProdutos(resultado.total)
  }

  async function buscarProduto(id: string) {
    setCarregandoProdutos(true)
    const resultado = await ProdutoService.encontrarProdutoPorId(id)
    setProduto(resultado)
    setCarregandoProdutos(false)
  }

  return {
    produto,
    totalProdutos,
    carregandoProdutos,
    buscarProduto,
    contarTotalProdutos
  }
}