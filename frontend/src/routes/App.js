import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './styles.css';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Store from '../pages/Store';
import Contact from '../pages/Contact';
import DataForm from '../pages/DataForm';

const App = () => {
    return (
        <div className="container-route">
          <header>
            <nav className="navbar navbar-expand-lg justify-content-around" id="menu">
                <Link to="/" id="link" className="navbar-brand"><img width="100px" src="/imgpages/logo.jpeg" alt="Página Inicial" /></Link>
                <Link to="/Produtos" id="link" className="nav-link">Nossos produtos</Link>
                <Link to="/Lojas" id="link" className="nav-link">Nossas lojas</Link>
                <Link to="/Contato" id="link" className="nav-link">Fale conosco</Link>
            </nav>
          </header>
          <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Produtos" component={Products} />
                <Route path="/Lojas" component={Store} />
                <Route path="/Contato" component={Contact} />
                <Route path="/Pedido/:id/:desc" component={DataForm} />
            </Switch>   
          </main>  
        </div>
    );
}

export default App;

