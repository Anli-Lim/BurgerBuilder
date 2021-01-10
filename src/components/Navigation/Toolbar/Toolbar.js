import React from 'react';
import classes from './Toolbar.module.css';
import BurgerLogo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../SideDrawer/Menu/Menu';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Menu clicked={props.openSideDrawer} />
        <div className={classes.Logo}>
            <BurgerLogo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
)

export default Toolbar;