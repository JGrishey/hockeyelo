import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    {this.props.headers.map((header) => { 
                        return (
                            <th key={header} 
                                style={{
                                    padding: "1em",
                                    backgroundColor: "rgba(44, 62, 80,1.0)",
                                    color: "#fff",
                                    textAlign: "center"
                                }}
                            >
                                {header} 
                            </th>
                        );
                    })}
                </tr>
            </thead>
        )
    }
}

export default TableHeader;