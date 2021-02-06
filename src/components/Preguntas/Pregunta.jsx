import React from 'react';

class Pregunta extends React.Component {
    constructor() {
        super();
        this.GenerarRespuestas = this.GenerarRespuestas.bind(this);
        this.state = {
            Respuesta: ""
        }
    }

    GenerarRespuestas() {
        let RandomNumbers = [], temp = [], RespuestasComponente = [];

        for (let i = 0; i < 4; i++) {
            RandomNumbers.push(i)
        }
        RandomNumbers.sort(function () { return Math.random() - 0.5 });

        this.props.respuestas.forEach(a => {
            temp.push(<li className="Border" key={a} onClick={(e) => this.props.Respuesta(e)}>{a}</li>)
            RespuestasComponente.push("");
        });

        for (let i = 0; i < temp.length; i++) {
            RespuestasComponente[RandomNumbers[i]] = temp[i];
        }

        return RespuestasComponente;
    }

    render() {
        return (
            <div className={"Pregunta__main " + this.state.Class}>
                <h3>{this.props.pregunta}</h3>
                <ul>
                    {
                        this.GenerarRespuestas()
                    }
                </ul>
            </div>
        );
    }
}

export default Pregunta;