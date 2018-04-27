import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props);
        return (
        <div className="welcome">
            <div className="session-container">
            <h1>Testing heading</h1>
            <div className="session">
                <p>Inside text component</p>
            </div>
            </div>
        </div>
        );
    }
}

export default Test;
