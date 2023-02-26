import React, { useEffect, useState } from 'react'

const SECURITY_CODE = 'estado'

const UseState = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [confirmed, setConfirmed] = useState(false)

    useEffect(() => {
        // Para que no se ejecute la primera vez
        if (loading) {
            // Simular llamado a una API
            setTimeout(() => {
                setLoading(false)

                // Comprobación del código de seguridad
                if (value !== SECURITY_CODE) {
                    setError(true)
                } else {
                    setError(false)
                    setConfirmed(true)
                    setValue('')
                }

            }, 2000)
        }
    }, [loading])

    if (!deleted && !confirmed) {
        return (
            <div>
                <h2>Eliminar UseState</h2>
                <p>Escribe el código de seguridad</p>

                {
                    loading &&
                    <p>Cargando...</p>
                }

                {
                    !loading && error &&
                    <p>El código de seguridad es incorrecto</p>
                }

                <input
                    type="text"
                    placeholder='Código de seguridad'
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />

                <button onClick={() => setLoading(true)}>
                    Comprobar
                </button>
            </div>
        )
    } else if (!deleted && confirmed) {
        return (
            <div>
                <h2>Eliminar UseState</h2>
                <p>¿Seguro de que quieres eliminar UseState?</p>

                <button onClick={() => setDeleted(true)}>
                    Eliminar
                </button>

                <button onClick={() => setConfirmed(false)}>
                    Cancelar
                </button>

            </div>
        )
    } else {
        return (
            <div>
                <h2>UseState fue eliminado</h2>
                <button
                    onClick={() => {
                        setDeleted(false)
                        setConfirmed(false)
                        setValue('')
                    }}
                >
                    Recuperarlo
                </button>
            </div>
        )
    }

}

export default UseState
