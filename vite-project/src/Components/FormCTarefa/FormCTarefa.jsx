import { useState } from 'react';

import { CampoTexto, Botao, TIPO_BOTAO} from '../../Components';
import style from './FormCTarefa.module.css';
import { useAppContext } from '../../hooks';

const FormCTarefa = () => { 
    const {addTarefa} = useAppContext()

    const [nomeTarefa, setNomeTarefa] = useState('');

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    }

    const submeterform = (event) => {
        event.preventDefault();

        if (!nomeTarefa){
            return
        }

        addTarefa(nomeTarefa)

        setNomeTarefa('');
    }

    return (
        
        <form className={style.FormCTarefa} onSubmit={submeterform}>
            <CampoTexto 
            value={nomeTarefa} 
            onChange={onChangeNomeTarefa}
            />
            <Botao texto="+" />
        </form>
    )
}

export { FormCTarefa };