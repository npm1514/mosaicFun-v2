import React, { Component } from 'react';
import Main from '../pages/MainPage';

class Root extends Component {
    render() {
        return <Main data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;