export interface ITarefa {
    tarefa : string,
    tempo : string
}

export interface ISetTarefa {
    setTarefas : React.Dispatch<React.SetStateAction<ITarefa[]>>
}