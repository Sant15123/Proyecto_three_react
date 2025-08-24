import React, { useState } from 'react';

function Saludo({ nombre }) {
  return <h3 style={{ color: '#61dafb' }}>Hola, {nombre}!</h3>;
}

function Props() {
  const [nombre, setNombre] = useState('Juan');
  return (
    <div>
     <h2>Definición</h2>
    <p>
      En <strong>React</strong>, las <strong>props</strong> (abreviatura de 
      <em>properties</em> o propiedades) son la forma de 
      <strong>pasar información de un componente padre a un componente hijo</strong>.
    </p>
    <p>
      Son inmutables dentro del componente hijo, lo que significa que 
      <strong>no se pueden modificar</strong> desde allí, solo se pueden leer.
    </p>
  <img src="https://www.chucksacademy.com/api/proxy/uploads/parent_child_dde59e9a0a.png" alt="Ejemplo de Props" className="concept-img" />
      <h2>Características principales</h2>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Permiten reutilizar componentes.</li>
        <li>Flujo de datos unidireccional (padre a hijo).</li>
        <li>Inmutables dentro del componente hijo.</li>
      </ul>
      <br />
      <h2>Ventajas de usar props</h2>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Permiten crear componentes reutilizables y flexibles.</li>
        <li>Facilitan la comunicación entre componentes.</li>
        <li>Ayudan a mantener el flujo de datos controlado.</li>
      </ul>
      <pre>
        <code>{`
        `}</code>
      </pre>
      <h3>Ejemplo de código:</h3>
      <pre>
        <code>{`
function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

// Uso:
<Saludo nombre="Juan" />
        `}</code>
      </pre>
      <h3>Ejemplo interactivo:</h3>
  <div className="ejemplo-interactivo" style={{ maxWidth: 320, margin: '1rem auto', textAlign: 'center' }}>
        <label htmlFor="nombre-input" style={{ marginRight: 8, fontWeight: 'bold', color: '#61dafb' }}>Nombre:</label>
        <input
          id="nombre-input"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          style={{
            width: 140,
            padding: '8px 10px',
            borderRadius: 8,
            border: '1.5px solid #444',
            background: '#23272f',
            color: '#fff',
            fontSize: 16,
            outline: 'none',
            boxShadow: '0 1px 4px #0002',
            transition: 'border 0.2s',
            marginRight: 8
          }}
        />
        <Saludo nombre={nombre} />
      </div>
    </div>
  );
}

export default Props;
