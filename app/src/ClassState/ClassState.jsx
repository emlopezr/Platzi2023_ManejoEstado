import React, { Component } from 'react'

const SECURITY_CODE = 'estado'

export class ClassState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            error: false,
            loading: false,
        }
    }

    componentDidUpdate() {
        // Para que no se ejecute la primera vez
        if (this.state.loading) {
            // Simular llamado a una API
            setTimeout(() => {
                this.setState({ loading: false })

                // Comprobación del código de seguridad
                if (this.state.value !== SECURITY_CODE) {
                    this.setState({ error: true })
                } else {
                    this.setState({ error: false })
                }
            }, 2000)
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Escribe el código de seguridad</p>

                {
                    this.state.loading &&
                    <p>Cargando...</p>
                }

                {
                    !this.state.loading && this.state.error &&
                    <p>El código de seguridad es incorrecto</p>
                }

                <input
                    type="text"
                    placeholder='Código de seguridad'
                    onChange={e => this.setState({ value: e.target.value })}
                    value={this.state.value}
                />
                <button
                    onClick={() => this.setState({ loading: true })}
                >
                    Comprobar
                </button>
            </div>
        )
    }
}

export default ClassState