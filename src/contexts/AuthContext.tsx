import type { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../client/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface AuthContextType {
  usuario: User | null;
  isAutenticado: boolean;
  desconectarUsuario: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [isAutenticado, setIsAutenticado] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setIsAutenticado(!!user);
    });

    // limpa o listener ao desmontar
    return () => unsubscribe();
  }, []);

  const desconectarUsuario = async () => {
    await auth.signOut();
    // aqui o onAuthStateChanged já vai atualizar o estado automaticamente
  };

  return (
    <AuthContext.Provider value={{ usuario, isAutenticado, desconectarUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};