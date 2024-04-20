import React, { Component } from 'react';

class ComponentStateClass extends Component {
    static defaultProps = {
        title: "Default title"
    };

    constructor(props) {
        super(props);
        this.state = {
            theme: {}
        };
    }

    // Auxiliar function
    changeTheme() {
        let colorNumber = Math.round(Math.random() * 3);
        const colors = ["red", "white", "orange", "black"];

        // State
        this.setState({ theme: { color: colors[colorNumber] } });
    }

    render() {
        return (
            <div>
                <h1 style={this.state.theme}>{this.props.title}</h1>
                <button onClick={() => this.changeTheme()}>Generate</button>
            </div>
        );
    }
}

export default ComponentStateClass