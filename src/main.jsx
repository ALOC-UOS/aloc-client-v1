import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
