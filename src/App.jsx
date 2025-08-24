import React, { useState } from 'react';
import './App.css';

import Layout from './Componentes/Layout.jsx';
import Inicio from './Pages/Inicio.jsx';
import Estados from './Pages/Estados.jsx';
import CicloDeVida from './Pages/CicloDeVida.jsx';
import Hooks from './Pages/Hooks.jsx';
import VirtualDOM from './Pages/VirtualDOM.jsx';
import Props from './Pages/Props.jsx';
import Redux from './Pages/Redux.jsx';


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
