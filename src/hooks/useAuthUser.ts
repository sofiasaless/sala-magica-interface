import { useEffect, useState } from "react";
import { auth } from "../client/firebase";
import type { User } from "firebase/auth";

export function useAuthUser () {
  const [usuario, setUsuario] = useState<User | null>()
  
  const carregarUsuarioAtivo = async () => {
    setUsuario(auth.currentUser)
  }

  const desconectarUsuario = async () => {
    await auth.signOut();    
  }

  const isAutenticado = (auth.currentUser != null)

  useEffect(() => {
    carregarUsuarioAtivo()
  }, [])

  return {
    usuario,
    carregarUsuarioAtivo,
    desconectarUsuario,
    isAutenticado
  }
}