import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>
);
