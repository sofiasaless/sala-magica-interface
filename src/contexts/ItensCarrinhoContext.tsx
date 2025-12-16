import { createContext, useContext, useState, type ReactNode } from "react";
import type { ItemCarrinho } from "../types/produto.type";

interface ItensCarrinhoContextType {
  carrinho: ItemCarrinho[],
  carrinhoVisitante: ItemCarrinho[],
  adicionarItem: (item: ItemCarrinho) => void,
  removerItem: (item_id: string) => void,
  isVazio: () => boolean,
  limparItens: () => void,
  alterarQuantidade: (item_id: string, quantidade: number) => void
}

const ItensCarrinhoContext = createContext<ItensCarrinhoContextType | undefined>(undefined);

export const ItensPedidoProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
  const [carrinhoVisitante, setCarrinhoVisitante] = useState<ItemCarrinho[]>([])

  const adicionarItem = (item: ItemCarrinho) => {
    const indice = carrinho.findIndex(it => it.id === item.id)
    if (indice === -1) {
      setCarrinho(prev => [...prev, item])
      return
    }
    let itens = carrinho
    itens[indice].quantidade += 1
    console.info('itens atuailizados: ', itens)
    setCarrinho(itens);
    return
  }

  const removerItem = (item_id: string) => {
    setCarrinho(prev => prev.filter(item => item.id !== item_id))
  }

  const alterarQuantidade = (item_id: string, quantidade: number) => {
    if (quantidade <= 0) {
      removerItem(item_id);
      return;
    }
    setCarrinho(prev =>
      prev.map(item =>
        item.id === item_id ? { ...item, quantidade } : item
      )
    );
  }

  const isVazio = () => {
    return carrinho.length === 0
  }

  const limparItens = () => {
    setCarrinho([]);
    setCarrinhoVisitante([]);
  }

  return (
    <ItensCarrinhoContext.Provider value={{ carrinho, adicionarItem, removerItem, isVazio, limparItens, carrinhoVisitante, alterarQuantidade }}>
      {children}
    </ItensCarrinhoContext.Provider>
  )
}

export const useItensCarrinho = () => {
  const context = useContext(ItensCarrinhoContext);
  if (!context) {
    throw new Error("useItensCarrinho deve ser usado dentro de um ItensCarrinhoProvider");
  }
  return context;
};