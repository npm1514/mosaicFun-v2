import React, { Component } from 'react';
import Newaccount from '../pages/NewaccountPage';

class Root extends Component {
    render() {
        return <Newaccount data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;