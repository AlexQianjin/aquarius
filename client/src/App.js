import React from 'react';
import './App.css';
import RouteConfig from './RouteConfig';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouteConfig />
        </ThemeProvider>
    );
}

export default App;
