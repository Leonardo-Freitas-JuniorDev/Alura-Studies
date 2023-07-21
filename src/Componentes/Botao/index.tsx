import React from "react";
import './style.scss'


interface Props {
    type?: "button" | "submit" | undefined, 
    onClick?: () => void
    children?: React.ReactNode
}

function Botao({onClick, type, children}: Props) {
    return (
        <button 
        type={type} 
        className="botao">
            {type}
        </button>
    )
}

export default Botao; 