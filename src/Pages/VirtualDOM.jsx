import React, { useState } from 'react';

function VirtualDOM() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(l => !l);
    setLikes(l => liked ? l - 1 : l + 1);
  }
  return (
    <div>
      <h2>Definición</h2>
    <p>
      El <strong>Virtual DOM</strong> es una representación ligera y en memoria del 
      <em>DOM real</em>.  
      React lo utiliza para optimizar la actualización de la interfaz, ya que 
      <strong>modificar directamente el DOM real es costoso</strong> en rendimiento.  
      Con el Virtual DOM, React solo actualiza las partes necesarias de la página.
    </p>
  <img src="https://media.licdn.com/dms/image/v2/D4E12AQEzGVX4cAycog/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695436136205?e=2147483647&v=beta&t=fPgT8JwwH4RIxGRo53WJiPxpr9mBYmjjekG5MCqKpVM" alt="Virtual DOM" className="concept-img" />
  <h2>Cómo funciona</h2>
    <ol style={{ listStylePosition: 'inside' }}>
      <li>Cuando el estado o las props cambian, React crea una nueva copia del Virtual DOM.</li>
      <li>React compara la nueva copia con la versión anterior (proceso llamado <em>diffing</em>).</li>
      <li>Se identifican solo los cambios necesarios.</li>
      <li>React actualiza de manera eficiente únicamente esas partes en el DOM real.</li>
    </ol>
      <h3>Ejemplo de código:</h3>
      <pre>
        <code>{`
// React compara el Virtual DOM con el DOM real y actualiza solo lo necesario
        `}</code>
      </pre>
      <h3>Ejemplo interactivo:</h3>
      <div className="ejemplo-interactivo" style={{ maxWidth: 320, margin: '1rem auto', textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', fontSize: 18 }}>Like con animación</p>
        <button
          aria-label={liked ? 'Quitar like' : 'Dar like'}
          onClick={handleLike}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            fontSize: 40,
            transition: 'transform 0.15s',
            color: liked ? '#ff4b7d' : '#aaa',
            marginBottom: 8
          }}
        >
          <span style={{
            display: 'inline-block',
            transform: liked ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.15s'
          }}>
            ♥
          </span>
        </button>
        <div style={{ fontSize: 20, color: liked ? '#ff4b7d' : '#aaa' }}>{likes} {likes === 1 ? 'like' : 'likes'}</div>
      </div>
      <h2>Características principales</h2>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>React actualiza solo lo necesario en el DOM real.</li>
        <li>Mejora el rendimiento de la aplicación.</li>
        <li>Permite interfaces reactivas y rápidas.</li>
      </ul>
      <br />
      <h2>Ventajas del Virtual DOM</h2>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Reduce el costo de renderizado en el navegador.</li>
        <li>Permite actualizaciones eficientes y rápidas.</li>
        <li>Facilita la creación de UIs complejas y dinámicas.</li>
      </ul>
    </div>
  );
}

export default VirtualDOM;
