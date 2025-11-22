import { useState } from "react";
import { ProdutoService } from "../service/produto.service";
import type { Produto } from "../types/produto.type";

export function useProdutos() {
  const [produtosPaginados, setProdutosPaginados] = useState<Map<string, Produto[]>>();

  async function paginar(param: {
    limite: number, categoria: string, ordem: string
  }, chave: string) {
    const resultado = await ProdutoService.paginarFiltrado(param.limite, param.categoria, param.ordem)
    setProdutosPaginados(prev => {
      const novo = new Map(prev);
      novo.set(chave, resultado.produtos);
      return novo;
    });
    return resultado
  }

  return { produtosPaginados, paginar };
}
