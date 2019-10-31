import React, { Component } from 'react';
import Ordercomplete from '../pages/OrdercompletePage';

class Root extends Component {
    render() {
        return <Ordercomplete data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;