import type { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { CategoriaService } from "../service/categoria.service";
import type { CategoriaResponseBody } from "../types/cateogiras.type";
import { errorHookResponse, successHookResponseByAxios, type HookResponse } from "../types/hookResponse.type";

interface CategoriasProdutoContextType {
  categoriasProdutos: CategoriaResponseBody[] | undefined,
  carregandoCategorias: boolean
}

const CategoriasProdutoContext = createContext<CategoriasProdutoContextType | undefined>(undefined);

export const CategoriasProdutoProvider = ({ children }: { children: ReactNode }) => {
  const [categoriasProdutos, setCategoriasProduto] = useState<CategoriaResponseBody[] | undefined>(undefined)
  const [carregandoCategorias, setCarregandoCategorias] = useState(false)

  useEffect(() => {
    buscarTodas()
  }, [])

  const buscarTodas = async (): Promise<HookResponse<CategoriaResponseBody[]>> => {
    try {
      setCarregandoCategorias(true)
      const resultado = await CategoriaService.listarTodasCategorias();
      setCategoriasProduto(resultado.data)
      return successHookResponseByAxios<CategoriaResponseBody[]>(resultado, 'buscar categorias de produtos');
    } catch (error: AxiosError | any) {
      return errorHookResponse<CategoriaResponseBody[]>(error);
    } finally {
      setCarregandoCategorias(false)
    }
  }

  return (
    <CategoriasProdutoContext.Provider value={{ categoriasProdutos, carregandoCategorias }}>
      {children}
    </CategoriasProdutoContext.Provider>
  )
}

export const useCategoriasProduto = () => {
  const context = useContext(CategoriasProdutoContext);
  if (!context) {
    throw new Error("useCategoriasProduto deve ser usado dentro de um CategoriasProdutoProvider");
  }
  return context;
};