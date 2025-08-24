import React from 'react';

function Inicio() {
  return (
    <div>
      <h1>¿Qué es React?</h1>
      <p>
      <strong>React</strong> es una <strong>biblioteca de JavaScript</strong> 
      desarrollada por Facebook (ahora Meta) que se utiliza para 
      <strong>construir interfaces de usuario interactivas</strong>.  
      Está enfocada en el desarrollo de aplicaciones web de una sola página 
      (<em>Single Page Applications - SPA</em>).
    </p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s" alt="React Logo" className="concept-img" />
    <p>
      React se basa en la creación de <strong>componentes reutilizables</strong>, 
      que son piezas de código que representan partes de la interfaz, como botones, 
      formularios o menús.
    </p>
    <h2>Características principales</h2>
    <ul style={{ listStylePosition: 'inside' }}>
      <li>Basado en <strong>componentes</strong>, lo que permite dividir la UI en piezas reutilizables.</li>
      <li>Utiliza el <strong>Virtual DOM</strong> para optimizar el rendimiento.</li>
      <li>Soporta <strong>JSX</strong>, una sintaxis que combina HTML y JavaScript.</li>
      <li>Es declarativo: describes qué quieres ver en la UI y React se encarga de actualizarla.</li>
      <li>Compatible con librerías y frameworks externos como Redux, React Router, Tailwind, etc.</li>
    </ul>
    <br />
    <h2>Ventajas de usar React</h2>
    <ul style={{ listStylePosition: 'inside' }}>
      <li>Mayor <strong>eficiencia</strong> gracias al Virtual DOM.</li>
      <li><strong>Reutilización</strong> de componentes en diferentes partes de la aplicación.</li>
      <li>Gran <strong>comunidad</strong> y ecosistema de herramientas.</li>
      <li>Facilidad para crear <strong>aplicaciones dinámicas</strong> y escalables.</li>
    </ul>
  <img src="https://react.dev/images/og-home.png" alt="React Logo" className="concept-img" />
    </div>
  );
}

export default Inicio;
