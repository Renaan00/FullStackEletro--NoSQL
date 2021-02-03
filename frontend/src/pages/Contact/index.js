import React from 'react';

import HeaderSection from '../../components/HeaderSection';
import Footer from '../../components/Footer';

import SubTitles from '../../objects/SubTitles';

const Contact = () => {
    return (
        <div className="container-fluid">
            <main>
                <HeaderSection>Contato</HeaderSection>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img style={{width:35}} src="./imgpages/icon_email.png" />
                            <SubTitles>contato@fullstackeletro.com</SubTitles>
                        </div>
                        <div class="col">
                            <img style={{width:45}} src="./imgpages/icon_tel.jpg" />
                            <SubTitles>(11) 99999-9999</SubTitles>
                        </div>
                    </div>
                
                    <form>
                        <div className="form-group pt-5">
                            <SubTitles>Nome:</SubTitles>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu nome" />
                        </div>
                        <div class="form-group">
                            <SubTitles>Mensagem:</SubTitles>
                            <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua mensagem" />
                        </div>         
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact;