import style from "./ListaTarefas.module.css"

import { ListaTarefasItem } from "./ListaTarefasItem"

import {useAppContext} from '../../hooks'

const ListaTarefas = () => {
    const {tarefas} = useAppContext()

    return(
        <ul className={style.ListaTarefas}>
            {!tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}
            {tarefas.map(item => (
                <ListaTarefasItem 
                    key={item.id} 
                    id={item.id} 
                    Nome={item.Nome} 
                />
            ))}
        </ul>
    )
}
export {ListaTarefas}