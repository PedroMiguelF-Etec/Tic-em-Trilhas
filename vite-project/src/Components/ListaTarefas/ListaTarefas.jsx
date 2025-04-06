import style from "./ListaTarefas.module.css"
import { ListaTarefasItem } from "./ListaTarefasItem"

const ListaTarefas = () => {
    const tarefas = [
        {id: 1, Nome: 'Item 1'},
        {id: 2, Nome: 'Item 2'},
        {id: 3, Nome: 'Item 3'}
    ];

    return(
        <ul className={style.ListaTarefas}>
            {tarefas.map(item => <ListaTarefasItem key={item.id} Nome={item.Nome} />)}
        </ul>
    )
}
export {ListaTarefas}