import {useState} from 'react'
import { useSelector, shallowEqual } from "react-redux";

import Logo from '../../../shared/components/Logo'
import AuthNav from './components/Auth/AuthNav'
import UserMenu from './components/UserMenu'
import NavbarNav from './components/Navigation/NavbarNav'
import Balance from './components/Balance'
import { ReactComponent as BurgerMenuIcon } from '../../../images/Navigation/menu.svg';
import { ReactComponent as BurgerMenuIconClose} from '../../../images/Navigation/close.svg';


import styles from './AppBar.module.scss'

const AppBar = () => {

    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false)
    
    const handleClickToggleBurgerMenu = () => {
        setToggleBurgerMenu(!toggleBurgerMenu)
    }
    
    const isAuthenticated = useSelector(state =>state.auth.isAuthenticated, shallowEqual);
    return (
        <header className={styles.mainPageContainer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logoWrapper}>
                        <Logo />
                        {isAuthenticated && <Balance />}
                    </div>
                    <div className={styles.navbarContainer}>
                         <div className={styles.burgerMenuIcon}><BurgerMenuIcon onClick={handleClickToggleBurgerMenu} /></div>
                        {toggleBurgerMenu &&
                            <div className={styles.burgerMenu}>
                            <div className={styles.burgerMenuForm}> 
                                <BurgerMenuIconClose className={styles.burgerMenuIconClose} onClick={handleClickToggleBurgerMenu} />
                            </div>
                            </div>}
                        <div className={styles.authNavContainer}>
                            {isAuthenticated && <NavbarNav />}
                        </div>
                        <div>
                            {isAuthenticated ? <UserMenu /> : <AuthNav />}
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    )
};

export default AppBar;
