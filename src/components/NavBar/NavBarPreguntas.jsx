import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const NavBarPreguntas = React.forwardRef((props, ref) => {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(props.isActive);
    const [counter, setCounter] = useState(0)
    const fin = props.fin;

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter(counter => counter + 1);
            }, 1000)
        }

        return () => clearInterval(intervalId);
    }, [isActive, props.isActive, counter])

    useEffect(() => {
        if (props.isActive === true) {
            setIsActive(true)
        }
    }, [props.isActive])

    useEffect(() => {
        if (fin === true) {
            setIsActive(false)
            props.ObtenerTiempo(second + (minute * 60))
        }
    }, [fin])

    return (
        <nav>
            <div className="Logo">
                <Link
                    to="/Home"
                ><i className="fas fa-home"></i>Inicio</Link>
            </div>
            <div className="Timer">
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second mr-1">{second}</span>
                <p>Puntos: {props.puntos}</p>
            </div>
            <div className="Perfil">
                {
                    props.name
                }
            </div>
        </nav>
    )
})
