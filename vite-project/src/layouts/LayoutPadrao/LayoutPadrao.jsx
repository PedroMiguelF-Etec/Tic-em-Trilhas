import { Outlet } from "react-router-dom"

import { Cabecalho, Conteudo, Rodape } from "../../Components"
import { useAppContext } from "../../hooks"

const LayoutPadrao = () => {
    const { criador } = useAppContext()
    return (
        <>
            <Cabecalho nomeUser="Pedro" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador={criador}/>
        </>
    )
}

export {LayoutPadrao}