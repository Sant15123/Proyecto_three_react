import React from 'react';

const Layout = ({ children }) => (
  <div className="app-bg">
    <header className="app-header">
      <img src="https://react.dev/images/og-home.png" alt="React Logo" className="app-logo" />
      <h1 className="app-title">
        Conceptos Fundamentales de React
      </h1>
    </header>
    {children}
    <footer className="app-footer">
      Proyecto React Vite &copy; 2025
    </footer>
  </div>
);

export default Layout;
