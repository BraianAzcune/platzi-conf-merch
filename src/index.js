import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const contenedor = document.getElementById('app');
const root = createRoot(contenedor);
root.render(<App />);
