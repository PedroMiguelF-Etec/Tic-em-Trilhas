
import { BrowserRouter} from 'react-router-dom';

import { Cabecalho , Conteudo, Rodape } from './Components';
import { Inicial } from './Pages'

import { Router } from './Router';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};

export { App };
