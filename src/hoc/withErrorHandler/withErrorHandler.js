import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null,
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.response.use(response => response, err => {
                this.setState({
                    error: err
                });
            });
            this.resInterceptor = axios.interceptors.request.use(request => {
                this.setState({
                    error: null
                });
                return request;
            });
        }

        // for cleaning up, preventing memory leak in 
        // case multiple components being wrapped will instantiate new interceptors
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return (
                <Auxiliary>
                    <Modal
                        show={this.state.error}
                        modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />

                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler;