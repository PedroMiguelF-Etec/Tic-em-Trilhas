import { createContext, useState } from "react";

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
    const {children} = props

    const [criador, setCriador] = useState('Pedro MiguelF')

    const [tarefas, setTarefas] = useState([
        {id: 1, Nome: 'Item 1'},
        {id: 2, Nome: 'Item 2'},
        {id: 3, Nome: 'Item 3'}
    ]);

    const addTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length + 1,
                Nome: nomeTarefa
            }

            return [
                ...estadoAtual,
                tarefa
            ]
        });
    }

    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id !== idTarefa)

            return [
                ...tarefasAtualizadas
            ]
        })
    }

    const editarTarefa = (idTarefa, nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa =>{
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    Nome: nomeTarefa,
                    } : tarefa
                })
            return [
                ...tarefasAtualizadas
            ]
        })
    }


    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            addTarefa,
            removerTarefa,
            editarTarefa
        }}>
            {children}
        </AppContext.Provider>
    )
}