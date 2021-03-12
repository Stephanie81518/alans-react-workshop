import React from 'react';

import style from './style.module.scss';

//Presentational component only (no state management)
const Footer = () => {
    return (
        <div className={style.footer_container}>
            <h1>This is my footer</h1>
            <p>This is my footer paragraph content</p>
        </div>
    )
}

export default Footer;