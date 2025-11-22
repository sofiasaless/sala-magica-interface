import type { PageProductResponse } from "../../types/produto.type";
import { api } from "../axios";

export const produtosApi = {
  paginar: (limit: number, startAfter: string) => api.get(`/products/page?limit=${limit}&startAfter=${startAfter}`),
  
  paginarFiltrado: (limit: number, categoria: string, ordem: string) => api.get<PageProductResponse>(`/products/page?limit=${limit}&categoria=${categoria}&ordem=${ordem}`)


};
