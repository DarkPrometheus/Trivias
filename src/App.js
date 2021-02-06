import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './components/routers/AppRouter';
import { store } from './store/store';

export const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
