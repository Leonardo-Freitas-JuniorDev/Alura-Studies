import React, { useState } from 'react';
import Botao from '../Componentes/Botao';
import Formulario from '../Componentes/Formulario';
import Lista from '../Componentes/Lista';
import style from './App.module.scss'
import Cronometro from '../Componentes/Cronometro';
import iTarefa from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<iTarefa[]>([]);
  const [selecionado, setSelecionado] = useState<iTarefa>()

  function selecionaTarefa(tarefaSelecionada: iTarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado} 
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
