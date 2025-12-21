import { api } from "../api/axios"
import type { RespostaEncomendaRequestBody } from "../types/encomenda.type"
import type { NotificacaoResponseBody } from "../types/notificacao.type"

export const NotificacaoService = {
  async enviarRespostaEncomenda(respostaBody: RespostaEncomendaRequestBody) {
    return await api.post(`/notification/order-answer`, respostaBody)
  },

  async encontrarPorUsuario(lidas?: boolean) {
    return await api.get<NotificacaoResponseBody[]>(`/notification/findAll${lidas?`?lidas=${lidas}`:''}`);
  }
  
}