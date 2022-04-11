import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App';

const contenedor = document.getElementById('app');
const root = createRoot(contenedor);
root.render(<App />);
