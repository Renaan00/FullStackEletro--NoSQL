import React from 'react';
import './styles.css';

import HeaderSection from '../../components/HeaderSection'; 
import Footer from '../../components/Footer';

import Titles from '../../objects/Titles';
import SubTitles from '../../objects/SubTitles';

const Store = () => {
    return (
        <div className="container-fluid">
            <main>
                <HeaderSection>Nossos Lojas</HeaderSection>
                <div id="info" className="row justify-content-center">
                    <div class="col-4">
                        <Titles>Rio de Janeiro</Titles>
                        <SubTitles>Avenida Presidente Vargas, 5000</SubTitles>
                        <SubTitles>10 &ordm; andar</SubTitles>
                        <SubTitles>Centro</SubTitles>
                        <SubTitles>(21) 3333-3333</SubTitles>
                    </div>
                    <div class="col-4">
                        <Titles>São Paulo</Titles>
                        <SubTitles>Avenida Paulista, 985</SubTitles>
                        <SubTitles>3 &ordm; andar</SubTitles>
                        <SubTitles>Jardins</SubTitles>
                        <SubTitles>(11) 4444-4444</SubTitles>
                    </div>
                    <div class="col-4">
                        <Titles>Santa Catarina</Titles>
                        <SubTitles>Rua Major &Aacute;vila, 370</SubTitles>
                        <SubTitles>Vila Mariana</SubTitles>
                        <SubTitles>(47) 5555-5555</SubTitles>
                        <br />
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Store;