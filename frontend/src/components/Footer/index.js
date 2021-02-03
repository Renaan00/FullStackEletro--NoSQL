import React from 'react';
import './styles.css';

import SubTitles from '../../objects/SubTitles'; 

const Footer = () => {
    return (
        <div className="row">
            <div id="box-footer" className="col">
                <SubTitles><b className="text-pay">Formas de pagamento:</b></SubTitles>
                <img src="/imgpages/pagamento.jpeg" alt="Formas de pagamento" width="390px" />
                <SubTitles>&copy; Recode Pro</SubTitles>
            </div>
        </div>
    )
}

export default Footer;