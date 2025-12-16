export type Produto = {
  id?: string;
  titulo: string;
  descricao: string;
  preco: number;
  modelagem: string;
  categoria: string;
  altura?: number;
  comprimento?: number;
  imagemCapa?: string;
  imagens?: string[];
  materiais: string;
  ativo: boolean;
  dataAnuncio: Date;
};

export type PageProductResponse = {
  produtos: Produto[],
  nextCursor: string,
  prevCursor: string
}

// export type ItemCarrinho = Omit<Produto, "ativo" | "dataAnuncio" | "materiais"> & {
//   quantidade: number
// }

export type ItemCarrinho = Produto & {
  quantidade: number
}