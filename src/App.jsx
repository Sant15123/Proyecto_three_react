import React, { useState } from 'react';
import './App.css';

import Layout from './Componentes/Layout.jsx';
import Inicio from './Componentes/Inicio.jsx';
import Estados from './Componentes/Estados.jsx';
import CicloDeVida from './Componentes/CicloDeVida.jsx';
import Hooks from './Componentes/Hooks.jsx';
import VirtualDOM from './Componentes/VirtualDOM.jsx';
import Props from './Componentes/Props.jsx';
import Redux from './Componentes/Redux.jsx';


const tabs = [
  { name: 'Inicio', component: <Inicio /> },
  { name: 'Props', component: <Props /> },
  { name: 'Estados', component: <Estados /> },
  { name: 'Ciclo de Vida', component: <CicloDeVida /> },
  { name: 'Hooks', component: <Hooks /> },
  { name: 'Virtual DOM', component: <VirtualDOM /> },
  { name: 'Redux', component: <Redux /> },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout>
      <nav className="app-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(idx)}
            className={`app-tab-btn${activeTab === idx ? ' active' : ''}`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
      <main className="app-main">
        {tabs[activeTab].component}
        <div style={{ height: '4rem', width: '100%' }} />
      </main>
    </Layout>
  );
}

export default App;
