import React from 'react';
import './styles.css';

import Footer from '../../components/Footer';

import Titles from '../../objects/Titles';
import SubTitles from '../../objects/SubTitles';

const Home = () => {
    return (
        <div className="container-fluid">
            <main>
                <Titles className="title">Seja bem vindo(a)!</Titles>
                <SubTitles className="subtitle">Aqui em nossa loja,<em>programadores tem desconto</em> nos produtos para sua casa!</SubTitles>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;