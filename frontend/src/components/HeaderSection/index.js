import React from 'react';
import './styles.css';

import Titles from '../../objects/Titles';

const HeaderSection = ({ children }) => {
    return (
        <div className="section">
            <Titles>{children}</Titles>
            <hr/>
        </div>
    );
}

export default HeaderSection;