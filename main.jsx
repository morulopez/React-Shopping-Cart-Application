import './style.css'
import {createRoot} from 'react-dom/client';
import { FiltersPoriver } from './src/components/context/filter';
import { App } from './src/app';
const root = createRoot(document.getElementById('app'))
root.render(
    <FiltersPoriver>
        <App/>
    </FiltersPoriver>
);
