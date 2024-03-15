import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import BodyContainer from './components/BodyContainer.js';
import Footer from './components/Footer.js';

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <BodyContainer/>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);