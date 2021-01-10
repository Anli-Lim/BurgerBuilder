import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    }
    render() {
        return (
            <Auxiliary>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    openSideDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token ? true : false,
    }
}

export default connect(mapStateToProps)(Layout);