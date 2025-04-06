import { Cabecalho } from './Components';
import { Conteudo } from './Components';
import { Rodape } from './Components';

import './App.css'

const App = () => {
  return (
    <>
      <Cabecalho nomeUser="Pedro" />
      <Conteudo>
        <h1>titulo</h1>
        <p>texto texto texto</p>
      </Conteudo>
      <Rodape criador="Pedro MiguelF"/>
    </>
  )
};

export { App };
