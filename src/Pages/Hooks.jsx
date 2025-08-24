import React, { useState, useEffect, useContext, createContext } from 'react';

const MiContexto = createContext();

function Hooks() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [operacion, setOperacion] = useState('+');
  const [resultado, setResultado] = useState(null);

  function calcular() {
    const n1 = parseFloat(valor1);
    const n2 = parseFloat(valor2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Valores inválidos');
      return;
    }
    let res;
    switch (operacion) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? n1 / n2 : 'División por 0'; break;
      default: res = 'Operación inválida';
    }
    setResultado(res);
  }

  return (
    <MiContexto.Provider value={null}>
      <div>
        <h2>Definición</h2>
    <p>
      Los <strong>Hooks</strong> son funciones especiales introducidas en React 16.8 
      que permiten a los <strong>componentes funcionales</strong> usar características avanzadas 
      como <em>estado</em>, <em>ciclo de vida</em> y <em>contexto</em>, sin necesidad de escribir 
      clases.  
      Gracias a los Hooks, el código es más <strong>sencillo, reutilizable y limpio</strong>.
    </p>
  <img src="https://filisantillan.com/content/images/2020/12/useState@2x.png" alt="Hooks" className="concept-img" />
  <h2>Tipos principales de Hooks</h2>
    <ul style={{ listStylePosition: 'inside' }}>
      <li><strong>useState:</strong> permite manejar el estado en un componente funcional.</li>
      <li><strong>useEffect:</strong> controla efectos secundarios y el ciclo de vida (montaje, actualización, limpieza).</li>
      <li><strong>useContext:</strong> accede a datos de un contexto sin necesidad de props.</li>
      <li><strong>useRef:</strong> crea referencias a elementos o valores que persisten entre renders.</li>
      <li><strong>useReducer:</strong> maneja estados más complejos con lógica similar a Redux.</li>
    </ul>
        <h3>Ejemplo de código:</h3>
        <pre>
          <code>{`
const [valor, setValor] = useState(0);

useEffect(() => {
  // Efecto secundario
}, [valor]);

const contexto = useContext(MiContexto);
          `}</code>
        </pre>
        <h3>Ejemplo interactivo:</h3>
        <div className="ejemplo-interactivo" style={{ maxWidth: 340, margin: '1rem auto', textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold', fontSize: 18 }}>Calculadora con hooks</p>
          <input
            type="number"
            value={valor1}
            onChange={e => setValor1(e.target.value)}
            placeholder="Valor 1"
            style={{
              width: 80,
              marginRight: 8,
              padding: '8px 10px',
              borderRadius: 8,
              border: '1.5px solid #444',
              background: '#23272f',
              color: '#fff',
              fontSize: 16,
              outline: 'none',
              boxShadow: '0 1px 4px #0002',
              transition: 'border 0.2s',
            }}
          />
          <select
            value={operacion}
            onChange={e => setOperacion(e.target.value)}
            style={{
              marginRight: 8,
              padding: '8px 10px',
              borderRadius: 8,
              border: '1.5px solid #444',
              background: '#23272f',
              color: '#fff',
              fontSize: 16,
              outline: 'none',
              boxShadow: '0 1px 4px #0002',
              transition: 'border 0.2s',
            }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
          <input
            type="number"
            value={valor2}
            onChange={e => setValor2(e.target.value)}
            placeholder="Valor 2"
            style={{
              width: 80,
              marginRight: 8,
              padding: '8px 10px',
              borderRadius: 8,
              border: '1.5px solid #444',
              background: '#23272f',
              color: '#fff',
              fontSize: 16,
              outline: 'none',
              boxShadow: '0 1px 4px #0002',
              transition: 'border 0.2s',
            }}
          />
          <button className="hooks-btn" onClick={calcular} style={{ marginTop: 8 }}>
            Calcular
          </button>
          <div style={{ fontSize: 20, marginTop: 12, color: '#61dafb' }}>{resultado !== null && `Resultado: ${resultado}`}</div>
        </div>
        <h2>Características principales</h2>
        <ul style={{ listStylePosition: 'inside' }}>
          <li>Permiten usar estado (<code>useState</code>), efectos (<code>useEffect</code>) y contexto (<code>useContext</code>).</li>
          <li>Facilitan la reutilización de lógica.</li>
          <li>Evitan la necesidad de clases.</li>
        </ul>
        <br />
        <h2>Ventajas de usar hooks</h2>
        <ul style={{ listStylePosition: 'inside' }}>
          <li>Permiten lógica reutilizable y desacoplada.</li>
          <li>Facilitan la composición de funcionalidades.</li>
          <li>Mejoran la legibilidad y mantenibilidad del código.</li>
        </ul>
      </div>
    </MiContexto.Provider>
  );
}

export default Hooks;
