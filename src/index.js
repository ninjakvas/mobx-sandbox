import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store, { StoreProvider } from './store/store';

const store = new Store();

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <App/>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
