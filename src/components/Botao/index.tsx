import React from 'react';
import './style.scss';

class Botao extends React.Component {
    render(){
        const backgroundColor = 'blue';
        const estaAtivo = true
        
        const styles = {
            backgroundColor,
            color: estaAtivo ? 'white' : 'black',
        }
        
        return(
            <button className='botao'>
                Botão
            </button>
        )
    }
}



export default Botao;