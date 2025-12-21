import { useState } from "react";
import type { NotificacaoResponseBody } from "../types/notificacao.type";
import { errorHookResponse, successHookResponseByAxios } from "../types/hookResponse.type";
import { NotificacaoService } from "../service/notificacao.service";
import type { RespostaEncomendaRequestBody } from "../types/encomenda.type";

export function useNotificacoes() {
  const [notsPorUsuario, setNotsPorUsuario] = useState<NotificacaoResponseBody[]>([])

  const encontrarNtsPorUsuario = async (lida?: boolean) => {
    try {
      const res = await NotificacaoService.encontrarPorUsuario(lida)
      setNotsPorUsuario(res.data)
      return successHookResponseByAxios<NotificacaoResponseBody[]>(res, 'encontrar notificações para o usuário');
    } catch (error) {
      return errorHookResponse<NotificacaoResponseBody[]>(error)
    }
  }

  const [isEnviandoResp, setIsEnviandoResp] = useState<boolean>(false)
  const enviarNotRespostaEncomenda = async (body: RespostaEncomendaRequestBody) => {
    try {
      setIsEnviandoResp(true)
      const res = await NotificacaoService.enviarRespostaEncomenda(body)
      return successHookResponseByAxios<NotificacaoResponseBody[]>(res, 'enviar resposta da encomenda');
    } catch (error) {
      return errorHookResponse<NotificacaoResponseBody[]>(error)
    } finally {
      setIsEnviandoResp(false)
    }
  }

  return {
    notsPorUsuario,
    encontrarNtsPorUsuario,
    enviarNotRespostaEncomenda,
    isEnviandoResp
  }

}