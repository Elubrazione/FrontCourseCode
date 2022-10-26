import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const app = document.getElementById('app') as HTMLElement;

ReactDOM.createRoot(app).render(
  <App/>
)