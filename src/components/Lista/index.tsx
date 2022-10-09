import React from 'react';
import Item from './Item';
import style from './Lista.module.scss'

function Lista () {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'JS',
        tempo: '01:30:00'
    }]

    return(
        <aside className={style.ListaTarefas}>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (       
                    <Item 
                        key = {index} 
                        {...item} 
                    />
                ))}
                
            </ul>
        </aside>
    )
}

export default Lista;