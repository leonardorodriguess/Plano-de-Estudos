import React from 'react';
import style from './Botao.module.scss';

interface Props {
    children: string,
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
}

export function Botao ({children, type, onClick} : Props){
    return(
        <button  type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}
