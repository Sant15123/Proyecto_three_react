import React, { useState } from 'react';

function Estados() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Definición</h2>
    <p>
      En <strong>React</strong>, el <strong>estado</strong> (state) es un 
      objeto que representa los <strong>datos internos y dinámicos</strong> de un componente.  
      Permite que un componente <strong>recuerde información</strong> entre renderizados 
      y actualice la interfaz de manera automática cuando esos datos cambian.
    </p>
  <img src="https://es.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_diff_same_pt1.dark.png&w=1920&q=75" alt="Ejemplo de State" className="concept-img" />
          <h2>Características principales</h2>
    <ul style={{ listStylePosition: 'inside' }}>
      <li>Es <strong>mutable</strong>: puede cambiar a lo largo de la ejecución.</li>
      <li>Se maneja con el hook <code>useState</code> en componentes funcionales.</li>
      <li>Cuando cambia el estado, el componente se <strong>vuelve a renderizar</strong>.</li>
      <li>Es <strong>local</strong> al componente (no se comparte como las props).</li>
    </ul>
    <br />
     <h2>Ventajas de usar estados</h2>
    <ul style={{ listStylePosition: 'inside' }}>
      <li>Permiten crear <strong>interfaces interactivas</strong>.</li>
      <li>Guardan datos que pueden cambiar en el tiempo.</li>
      <li>Facilitan el control de la <strong>UI dinámica</strong> (formularios, contadores, etc.).</li>
    </ul>
    <h3>Ejemplo:</h3>
      <pre>
        <code>{`
const [contador, setContador] = useState(0);

return (
  <div>
    <p>Contador: {contador}</p>
    <button onClick={() => setContador(contador + 1)}>Incrementar</button>
  </div>
);
        `}</code>
      </pre>
      <h3>Ejemplo interactivo:</h3>
  <div className="ejemplo-interactivo" style={{ maxWidth: 320, margin: '1rem auto' }}>
        <p style={{ fontWeight: 'bold', fontSize: 18 }}>Contador</p>
        <p style={{ fontSize: 24, margin: '12px 0' }}>{contador}</p>
        <button className="state-btn" onClick={() => setContador(contador + 1)} style={{ marginRight: 8 }}>Incrementar</button>
        <button className="state-btn" onClick={() => setContador(contador - 1)}>Decrementar</button>
      </div>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Permite que los componentes sean interactivos.</li>
        <li>Se actualiza con setState o setNombre, etc.</li>
        <li>Solo afecta al componente donde se declara.</li>
      </ul>
    </div>
  );
}

export default Estados;
