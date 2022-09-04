import React from 'react';

class Botao extends React.Component {
    render(){
        const backgroundColor = 'blue';
        const estaAtivo = true
        
        const styles = {
            backgroundColor,
            color: estaAtivo ? 'white' : 'black',
        }
        
        return(
            <button style={styles}>
                Botão
            </button>
        )
    }
}



export default Botao;