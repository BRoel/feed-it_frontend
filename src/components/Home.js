import React from 'react';
import Registration from './auth/Registration';

export default class Home extends React.Component{
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Registration />
            </div>
        )
    }
}