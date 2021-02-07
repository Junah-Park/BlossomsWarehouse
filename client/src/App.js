import React from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand"href="index.html">Blossoms Warehouse</a>
                    </div>
                    <div>
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Sign In</a>
                    </div>
                </header>
                <main>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                    
                </main>
                
                <footer className = "row center"><a href="https://github.com/Junah-Park/BlossomsWarehouse"><img height="35px" width="35px" src="/images/github.png" alt="Github"></img></a></footer>
            </div>
        </BrowserRouter>
    );
}

export default App;