import React from "react";
import logo from '../images/SGN_09_24_2022_1663968217400 1.svg'
import styles from './Header.module.scss'

function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} width={'141px'}/>
            </div>
                <ul>
                    <li><a>Главная</a></li>
                    <li><a>Тарифы</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            <div className={styles.rightMenu}>
                <button className={styles.buttonSignUp}>Зарегистрироваться</button>
                <div></div>
                <button className={styles.buttonSignIn}>Войти</button>
            </div>
        </header>
    )
}

export default Header