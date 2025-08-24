import React, { useEffect, useState } from 'react';

function CicloDeVida() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    let timer;
    if (activo) {
      setMensaje('Temporizador iniciado (componentDidMount)');
      timer = setInterval(() => {
        setSegundos(s => s + 1);
      }, 1000);
    } else if (!activo && segundos !== 0) {
      setMensaje('Temporizador detenido (componentWillUnmount)');
    }
    return () => {
      clearInterval(timer);
    };
  }, [activo]);

  return (
    <div>
      <h2>Definición</h2>
    <p>
      El <strong>ciclo de vida de un componente</strong> en React se refiere a las 
      <strong>etapas por las que pasa un componente</strong> desde que se crea, se renderiza, 
      se actualiza y finalmente se elimina de la interfaz.  
      Conocer este ciclo es fundamental para controlar qué ocurre en cada fase y optimizar el rendimiento.
    </p>
      <img src="https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F1d24a63913379-Ciclo-de-vida-do-React-metodos-e-ganchos-em-detalhes.png" alt="Ciclo de Vida" className="concept-img" />
      <h2>Fases del ciclo de vida</h2>
    <ul style={{ listStylePosition: 'inside' }}>
      <li><strong>Montaje (Mounting):</strong> cuando el componente se crea y se muestra en el DOM.</li>
      <li><strong>Actualización (Updating):</strong> cuando cambian las props o el estado, y el componente se vuelve a renderizar.</li>
      <li><strong>Desmontaje (Unmounting):</strong> cuando el componente se elimina del DOM.</li>
    </ul>
      <h3>Ejemplo de código:</h3>
      <pre>
        <code>{`
  useEffect(() => {
    // Código que se ejecuta al montar
    return () => {
      // Código que se ejecuta al desmontar
    };
  }, []);
        `}</code>
      </pre>
      <h3>Ejemplo interactivo:</h3>
      <div className="ejemplo-interactivo" style={{ maxWidth: 320, margin: '1rem auto', textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', fontSize: 18 }}>Temporizador con ciclo de vida</p>
        <p style={{ fontSize: 24, margin: '12px 0' }}>{segundos} seg</p>
        <button className="ciclo-btn" onClick={() => setActivo(a => !a)} style={{ marginRight: 8 }}>
          {activo ? 'Detener' : 'Iniciar'}
        </button>
        <button className="ciclo-btn" onClick={() => { setSegundos(0); setActivo(false); }}>
          Reiniciar
        </button>
        <p style={{ marginTop: 12, color: '#61dafb' }}>{mensaje}</p>
      </div>
      <h2>Características principales</h2>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Permite ejecutar código en diferentes fases del ciclo de vida.</li>
        <li>Ideal para suscripciones, timers y efectos secundarios.</li>
        <li>useEffect reemplaza métodos como componentDidMount y componentWillUnmount.</li>
      </ul>
      <br />
      <h2>Ventajas de usar ciclos de vida</h2>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Permiten controlar efectos secundarios y recursos.</li>
        <li>Facilitan la integración con APIs y suscripciones.</li>
        <li>Ayudan a limpiar recursos al desmontar el componente.</li>
      </ul>
    </div>
  );
}

export default CicloDeVida;
