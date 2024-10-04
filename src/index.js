// Importing necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing CSS styles
import App from './App'; // Importing the main App component
// Importing reportWebVitals for performance measurement

// Creating a root element and rendering the App component into the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Measuring performance, optional and can be removed if not needed

