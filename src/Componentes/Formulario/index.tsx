import React, { useState } from "react";
import Botao from "../Botao";
import './style.scss'
import iTarefa from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid"

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<iTarefa[]>>
}

function Formulario({setTarefas}: Props) {
    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState('00:00')

    function addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        setTarefas(tarefasAntigas =>
            [...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }])
            setTarefa("");
            setTempo("00:00")

    }
    return (
        <form className="novaTarefa" onSubmit={addTarefa}>
            <div className="inputContainer">
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>

                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você vai estudar?"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    required
                >

                </input>

            </div>
            <div className="inputContainer">
                <label>
                    Tempo
                </label>

                <input
                    type="time"
                    step="1"
                    id="tempo"
                    value={tempo}
                    name="tempo"
                    onChange={evento => setTempo(evento.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                >

                </input>
            </div>
            <Botao
                type="submit"
            />
        </form>
    )
}


export default Formulario