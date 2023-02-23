import React, { useEffect, useState } from 'react'

const UseState = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Para que no se ejecute la primera vez
        if (loading) {
            // Simular llamado a una API
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    }, [loading])


    return (
        <div>
            <h2>Eliminar UseState</h2>
            <p>Escribe el código de seguridad</p>

            {
                loading &&
                <p>Cargando...</p>
            }

            <input
                type="text"
                placeholder='Código de seguridad'
            />
            <button
                onClick={() => setLoading(true)}
            >
                Comprobar
            </button>
        </div>
    )
}

export default UseState