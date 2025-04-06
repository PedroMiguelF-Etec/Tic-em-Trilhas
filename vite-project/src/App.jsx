import { Cabecalho , Conteudo, Rodape } from './Components';
import { Inicial } from './Pages'

import './App.css'

const App = () => {
  return (
    <>
      <Cabecalho nomeUser="Pedro" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Pedro MiguelF"/>
    </>
  )
};

export { App };
