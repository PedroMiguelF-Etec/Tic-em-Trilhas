
import { FormCTarefa, ListaTarefas } from "../../Components";
import style from './Inicial.module.css'

const Inicial = () =>{

    return(
        <div className={style.Inicial}>
            <FormCTarefa />
            <ListaTarefas />

        </div>
    );
};

export { Inicial };