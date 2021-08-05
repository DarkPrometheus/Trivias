import React from 'react';
import Swal from 'sweetalert2';

import { NavBarPreguntas } from './../NavBar/NavBarPreguntas';
import Pregunta from '../Preguntas/Pregunta';
import { SaveData } from './../../helpers/SaveData';

let refs = [];
let Preguntas = [];
let PregutnasGeneradas = false;

class Categoria extends React.Component {
    constructor(props) {
        super();

        this.Respuesta = this.Respuesta.bind(this);
        this.GenerarPreguntas = this.GenerarPreguntas.bind(this);
        this.Empezar = this.Empezar.bind(this);
        this.Sumar = this.Sumar.bind(this);
        this.ObtenerTiempo = this.ObtenerTiempo.bind(this);

        this.state = {
            p: 0,
            PreguntaMostrar: "",
            Mostrar: "Display",
            puntos: 0,
            isActive: false,
            fin: false
        }
        PregutnasGeneradas = props.location.state.preguntasGeneradas
    }

    // Genera numeros aleatorios para organizar el arreglo Preguntas de manera diferente cada vez
    GenerarPreguntas() {
        refs = [];
        let RandomNumbers = [], temp = [], PreguntasComponente = [];

        // Se generan 20 numeros
        for (let i = 0; i < 20; i++) {
            RandomNumbers.push(i)
        }
        // Se re ordenan de manera diferente
        RandomNumbers.sort(function () { return Math.random() - 0.5 });

        // Se generan los componentes de Pregunta
        this.props.location.state.preguntas.forEach(a => {
            temp.push(<Pregunta key={a.id} pregunta={a.pregunta} Respuesta={this.Respuesta} respuestas={a.respuestas}
                ref={instance => {
                    refs.push(instance);
                }}
            />)
        });
        // almacenamiento final de manera aleatoria
        for (let i = 0; i < temp.length; i++) {
            PreguntasComponente[RandomNumbers[i]] = temp[i];
        }

        Preguntas = PreguntasComponente;
    }

    // Empieza las preguntas recorriendo el arreglo Preguntas y guardando la pregunta que sigue en PreguntaMostrar, que se renderiza en el componte
    Empezar() {
        this.setState({
            p: this.state.p + 1,
            PreguntaMostrar: Preguntas[this.state.p],
            Mostrar: "NoDisplay",
            isActive: true
        })
    }

    Respuesta(resp) {
        let respuestaRecibida = resp.target.textContent;
        let respuestaCorrecta = this.state.PreguntaMostrar.props.respuestas[0];
        if (respuestaRecibida === respuestaCorrecta) {
            this.Sumar()
            Swal.fire({
                position: "top",
                icon: "success",
                title: 'Correcto!',
                showConfirmButton: false,
                timer: 1300
            })
        } else {
            Swal.fire({
                position: "top",
                icon: "question",
                title: 'Creo que no...',
                showConfirmButton: false,
                timer: 1300
            })
        }

        // Se finaliza la trivia haciendo que el timer ubicado en el navbar se detenga y a su vez llame a ObtenerTiempo
        if (this.state.p === 20) {
            console.log("Fin de la trivia")
            this.setState({
                fin: true
            })
        }

        this.Empezar()
    }

    Sumar() {
        this.setState({
            puntos: this.state.puntos + 1
        })
    }

    async ObtenerTiempo(tiempo) {
        console.log("Fin")
        // await SaveData(this.props.location.state.user, this.state.puntos, tiempo, this.props.location.state.Categoria)

        this.props.history.push("/Home/TablasDePuntuacion")
    }

    render() {
        if (PregutnasGeneradas === false) {
            this.GenerarPreguntas()
            PregutnasGeneradas = true;
        }
        return (
            <div className="Categoria__main">
                <NavBarPreguntas
                    puntos={this.state.puntos}
                    isActive={this.state.isActive}
                    fin={this.state.fin}
                    ObtenerTiempo={this.ObtenerTiempo}
                    name={this.props.location.state.user} />
                <div className="Categoria__content">
                    <h2>{this.props.location.state.Categoria}</h2>
                    <button className={this.state.Mostrar} onClick={this.Empezar}>
                        Empezar!
                    </button>
                    {
                        this.state.PreguntaMostrar
                    }
                </div>
            </div>
        );
    }
}

export default Categoria;