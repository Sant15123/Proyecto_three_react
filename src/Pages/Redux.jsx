import React, { useReducer } from 'react';

// Reducer simulado estilo Redux
  function contadorReducer(state, action) {
    switch (action.type) {
      case 'incrementar':
        return { ...state, valor: state.valor + 1 };
      case 'decrementar':
        return { ...state, valor: state.valor - 1 };
      default:
        return state;
    }
  }

  function Redux() {
    const [state, dispatch] = useReducer(contadorReducer, { valor: 0 });

    return (
      <div>
         <h2>Definición</h2>
    <p>
      <strong>Redux</strong> es una librería de JavaScript utilizada para 
      <strong>manejar el estado global</strong> de una aplicación.  
      Se integra frecuentemente con <strong>React</strong> para facilitar la gestión 
      y el intercambio de datos entre múltiples componentes.
    </p>
    <p>
      Redux se basa en el patrón de arquitectura <strong>Flux</strong> y utiliza 
      un único <em>store</em> centralizado donde se guarda todo el estado de la aplicación.
    </p>
  <img src="https://redux.js.org/img/redux-logo-landscape.png" alt="Redux" className="concept-img" style={{ marginBottom: '1rem' }} />
  <h2>Características principales</h2>
    <ul style={{ listStylePosition: 'inside' }}>
      <li>El estado se guarda en un único <strong>store centralizado</strong>.</li>
      <li>El estado es <strong>inmutable</strong> y solo puede cambiarse mediante <strong>acciones</strong>.</li>
      <li>Los cambios son gestionados por funciones llamadas <strong>reducers</strong>.</li>
      <li>Facilita la <strong>comunicación entre componentes</strong> sin necesidad de pasar props manualmente.</li>
      <li>Hace que la aplicación sea más <strong>predecible</strong> y fácil de depurar.</li>
    </ul>
        <h3>Ejemplo de código:</h3>
        <pre>
          <code>{`
import { createStore } from 'redux';

function reducer(state = 0, action) {
  switch (action.type) {
    case 'incrementar':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: 'incrementar' });
          `}</code>
        </pre>
        <h3>Ejemplo interactivo:</h3>
  <div className="ejemplo-interactivo" style={{ maxWidth: 320, margin: '1rem auto' }}>
          <p style={{ fontWeight: 'bold', fontSize: 18 }}>Contador global (simulado)</p>
          <p style={{ fontSize: 24, margin: '12px 0' }}>{state.valor}</p>
          <button className="redux-btn" onClick={() => dispatch({ type: 'incrementar' })} style={{ marginRight: 8 }}>Incrementar</button>
          <button className="redux-btn" onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
        </div>
      </div>
    );
  }

  export default Redux;
