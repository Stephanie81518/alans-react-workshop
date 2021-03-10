import React from 'react';

import style from './style.module.scss';

//Presentational component only (no state management)
const Header = () => {
    return (
        <div className={style.header_container}>
            <h1>This is my header</h1>
            <p>This is my paragraph</p>
        </div>
    )
}

export default Header;

