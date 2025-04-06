import { Botao, TIPO_BOTAO } from '../../Botao';
import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
    const { Nome } = props;

    return(
        <li className={style.ListaTarefasItem}>
            {Nome}
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}/>
        </li>
    )
};

export {ListaTarefasItem}