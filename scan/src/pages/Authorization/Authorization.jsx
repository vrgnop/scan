import React, {useState} from "react";
import characters from '../../assets/images/Characters.svg';
import styles from './SignIn.module.scss';
import locker from '../../assets/images/locker.svg'
import Placeholder from "../../components/Placeholder/Placeholder";


function SignIn() {
    const [signIn, setSignIn] = useState('authorization')

    

    return (
            <section className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    <img src={characters}/>
                </div>
                <div className={styles.authorization}>
                    <img width={"60px"} src={locker}/>
                    <Placeholder />
                </div>
            </section>
    )
}

export default SignIn