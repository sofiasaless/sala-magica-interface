import { auth } from "../client/firebase";
import { UsuarioService } from "../service/usuario.service";
import type { ContadorQuantidade } from "../types/contador.type";
import { errorHookResponse, successHookResponseByAxios } from "../types/hookResponse.type";
import type { User, UserFirestore } from "../types/user.type";

export function useUsuarios() {
  async function contarUsuarios() {
    try {
      const result = await UsuarioService.contarUsuarios();
      return successHookResponseByAxios<ContadorQuantidade>(result, 'contar usuários para admin');
    } catch (error) {
      return errorHookResponse<ContadorQuantidade>(error);
    }
  }

  async function encontrarUsuarioPorId(id: string) {
    try {
      const result = await UsuarioService.encontrarPorId(id);
      return successHookResponseByAxios<UserFirestore>(result, 'ao buscar usuário para admin')
    } catch (error) {
      return errorHookResponse<UserFirestore>(error);
    }
  }

  async function atualizarUsuario(body: Partial<User>) {
    try {
      const result = await UsuarioService.atualizarUsuario(body);
      await auth.currentUser?.reload()
      return successHookResponseByAxios(result, 'ao atualizar informações do usuário')
    } catch (error) {
      return errorHookResponse(error);
    }
  }

  async function excluirConta() {
    try {
      const result = await UsuarioService.deletarUsuario();
      await auth.currentUser?.reload()
      return successHookResponseByAxios(result, 'ao deletar conta')
    } catch (error) {
      return errorHookResponse(error);
    }
  }

  return {
    contarUsuarios,
    encontrarUsuarioPorId,
    excluirConta,
    atualizarUsuario
  }
}