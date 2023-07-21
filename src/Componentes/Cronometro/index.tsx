
import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import TempoPSegundos from '../../common/utils/Time'
import iTarefa from '../../types/tarefa'
import { useState } from 'react'
import { useEffect } from 'react'

interface Props {
    selecionado: iTarefa | undefined,
    finalizarTarefa: () => void
}
export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();


    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(TempoPSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador -1)
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <button onClick={() => regressiva(tempo)}>
                Começar
            </button>
        </div>
    )
}