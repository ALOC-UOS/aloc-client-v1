import { createRoot } from 'react-dom/client';
import axios from 'axios';

import App from './App';
import './index.css';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
