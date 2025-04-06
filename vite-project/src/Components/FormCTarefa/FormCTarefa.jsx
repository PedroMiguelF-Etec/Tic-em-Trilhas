import { CampoTexto, Botao, TIPO_BOTAO} from '../../Components';
import style from './FormCTarefa.module.css';

const FormCTarefa = () => { 
    return (
        
        <form className={style.FormCTarefa}>
            <CampoTexto />
            <Botao texto="+" />
        </form>
    )
}

export { FormCTarefa };