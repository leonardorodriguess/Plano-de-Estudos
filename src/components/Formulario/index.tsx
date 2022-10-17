import React, { useState } from 'react';
import { Botao } from '../Botao';
import style from './Formulario.module.scss';
import {ITarefa} from '../../types/tarefa';
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTarefas : React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export function Formulario({setTarefas}: Props){

    const [state, setState] = useState({
        tarefa: '',
        tempo: '00:00'
    });

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...state,
                    selecionado : false,
                    completado : false,
                    id : uuidv4()
                }
            ]
        );
        setState({
            tarefa: "",
            tempo: "00:00"
        })
    }
    
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label  htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>

                <input
                    type="text"
                    name="tarefa"
                    value={state.tarefa}
                    onChange={evento => setState({ ...state, tarefa : evento.target.value})}
                    id="tarefa"
                    placeholder='O que você quer estudar'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={state.tempo}
                    onChange={evento => setState({ ...state, tempo: evento.target.value})}
                    id="tempo"
                    min='00:00:00'
                    max='01:30:00'
                    required
                />

            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}
