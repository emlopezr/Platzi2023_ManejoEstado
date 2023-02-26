import React, { useEffect, useReducer } from 'react'

const SECURITY_CODE = 'estado'

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const actionTypes = {
    VALUE: 'SET_VALUE',
    ERROR: 'SET_ERROR',
    LOADING: 'SET_LOADING',
    DELETED: 'SET_DELETED',
    CONFIRMED: 'SET_CONFIRMED',
    RESET: 'SET_RESET',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.VALUE:
            return {
                ...state,
                value: action.payload,
            }
        case actionTypes.ERROR:
            return {
                ...state,
                error: true,
            }
        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case actionTypes.DELETED:
            return {
                ...state,
                deleted: true,
            }
        case actionTypes.CONFIRMED:
            return {
                ...state,
                confirmed: true,
                error: false,
                value: ''
            }
        case actionTypes.RESET:
            return {
                ...state,
                confirmed: false,
                deleted: false,
                error: false,
                value: ''
            }
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const onWrite = (e) => dispatch({ type: actionTypes.VALUE, payload: e.target.value })

    const onError = () => dispatch({ type: actionTypes.ERROR })
    
    const onLoading = (newLoading) => dispatch({ type: actionTypes.LOADING, payload: newLoading })

    const onDelete = () => dispatch({ type: actionTypes.DELETED })

    const onConfirm = () => dispatch({ type: actionTypes.CONFIRMED })

    const onReset = () => dispatch({ type: actionTypes.RESET })

    useEffect(() => {
        // Para que no se ejecute la primera vez
        if (state.loading) {
            // Simular llamado a una API
            setTimeout(() => {
                onLoading(false)

                // Comprobación del código de seguridad
                if (state.value !== SECURITY_CODE) {
                    onError()
                } else {
                    onConfirm()
                }

            }, 2000)
        }
    }, [state.loading])

    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar UseReducer</h2>
                <p>Escribe el código de seguridad</p>

                {
                    state.loading &&
                    <p>Cargando...</p>
                }

                {
                    !state.loading && state.error &&
                    <p>El código de seguridad es incorrecto</p>
                }

                <input
                    type="text"
                    placeholder='Código de seguridad'
                    onChange={onWrite}
                    value={state.value}
                />

                <button onClick={() => onLoading(true)}>
                    Comprobar
                </button>
            </div>
        )
    } else if (!state.deleted && state.confirmed) {
        return (
            <div>
                <h2>Eliminar UseReducer</h2>
                <p>¿Seguro de que quieres eliminar UseReducer?</p>

                <button onClick={onDelete}>
                    Eliminar
                </button>

                <button onClick={onReset}>
                    Cancelar
                </button>

            </div>
        )
    } else {
        return (
            <div>
                <h2>UseReducer fue eliminado</h2>
                <button onClick={onReset}>
                    Recuperarlo
                </button>
            </div>
        )
    }

}

export default UseReducer