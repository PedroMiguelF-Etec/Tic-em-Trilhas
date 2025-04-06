import { Outlet } from "react-router-dom"

import { Cabecalho, Conteudo, Rodape } from "../../Components"

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho nomeUser="Pedro" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador="Pedro MiguelF"/>
        </>
    )
}

export {LayoutPadrao}