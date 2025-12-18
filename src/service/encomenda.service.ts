import { AxiosError } from "axios";
import { api } from "../api/axios";
import type { EncomendaRequestBody, EncomendaResponseBody } from "../types/encomenda.type";
import { errorHookResponse, successHookResponseByAxios } from "../types/hookResponse.type";

export const EncomendaService = {
  async enviarEncomenda(encomendaBody: EncomendaRequestBody) {
    try {
      const resultado = await api.post<EncomendaResponseBody>(`/orders/create`, encomendaBody)
      return successHookResponseByAxios<EncomendaResponseBody>(resultado, 'enviar encomenda para análise')
    } catch (error: AxiosError | any) {
      return errorHookResponse<EncomendaResponseBody>(error);
    }
  },

  async encontrarPorUsuario() {
    try {
      const resultado = await api.get<EncomendaResponseBody[]>(`/orders/findAll`)
      return successHookResponseByAxios<EncomendaResponseBody[]>(resultado, 'buscar encomendas do usuário')      
    } catch (error: AxiosError | any) {
      return errorHookResponse<EncomendaResponseBody[]>(error);
    }
  }
}