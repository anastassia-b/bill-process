import React from 'react';
import SessionContainer from './session_container';

class OktaWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
    }

    componentDidMount() {
        this.setState({ready: true})
    }

    render() {
        return (
            <div id="widget-container">
                { this.state.ready ? <SessionContainer /> : <div id="not-ready"></div> }
            </div>
        )
    }
}

export default OktaWidget;