import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO, CampoTexto } from '../../../Components';

import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
    const { id, Nome } = props;

    const [estaEditando, setEstaEditando] = useState(false);


    const {editarTarefa, removerTarefa} = useAppContext()

    return(
        <li className={style.ListaTarefasItem}>
            {estaEditando && (
                <CampoTexto 
                    defaultValue={Nome}
                    onChange={event => editarTarefa(id, event.currentTarget.value)}
                    onBlur={() => setEstaEditando(false)} 
                    autoFocus
                />
            )}
            {!estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{Nome}</span>
            )}
            <Botao 
            texto="-" 
            tipo={TIPO_BOTAO.SECUNDARIO}
            onClick={() => removerTarefa(id)}/>
        </li>
    )
};

export {ListaTarefasItem}