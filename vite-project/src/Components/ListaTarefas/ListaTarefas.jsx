import style from "./ListaTarefas.module.css"
import { ListaTarefasItem } from "./ListaTarefasItem"

const ListaTarefas = () => {
    const tarefas = [
        {id: 1, Nome: 'item 1'},
        {id: 2, Nome: 'item 2'},
        {id: 3, Nome: 'item 3'},
    ];

    return(
        <ul className={style.ListaTarefas}>
            {tarefas.map(item => <ListaTarefas key={item.id} Nome={item.Nome} />)}
            <ListaTarefasItem Nome="item 1"/>
            <ListaTarefasItem Nome="item 2"/>
            <ListaTarefasItem Nome="item 3"/>
        </ul>
    )
}
export {ListaTarefas}