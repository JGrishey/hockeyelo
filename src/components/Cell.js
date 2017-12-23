import React, { Component } from 'react';

class Cell extends Component {
    render() {
        return (
            <td
                style={{
                    backgroundColor: this.props.color,
                    padding: '1em',
                    textAlign: this.props.textAlign ? this.props.textAlign : "inherit",
                    verticalAlign: "middle"
                }}
            >
                {this.props.content}
            </td>
        );
    }
}

export default Cell;