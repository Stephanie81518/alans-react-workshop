import React from 'react';

import style from './style.module.scss';

const Header = () => {
    return (
        <div className={style.header_container}>
            <div className={style.nav_container}>
                <a>Home</a>
                <a>People</a>
                <a>Home</a>
                </div>
        </div>

    )
}

export default Header;

