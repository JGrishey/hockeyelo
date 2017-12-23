import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer} from 'recharts';

class Visual extends Component {
    render() { 
        return (
            <ResponsiveContainer width="100%" height={700}>
                <LineChart data={this.props.data}
                >
                    <XAxis dataKey="date"/>
                    <Tooltip content={(e) => {console.log(e)}}/>
                    <YAxis type="number" domain={[1450, 1620]} />
                    {Object.keys(this.props.data[0]).map((key, index) => {
                        return (
                            key != "data" ?
                                <Line type="monotone" 
                                    dataKey={key} 
                                    stroke={"rgb(" + Math.trunc(Math.random() * 255) + "," + Math.trunc(Math.random() * 255) + "," + Math.trunc(Math.random() * 255) + ")"} 
                                    strokeWidth={3}
                                    opacity={0.3}
                                    name={key}
                                    onMouseOver={(e) => {console.log(e)}}
                                />
                            :
                                {}
                        )
                    })}
                    <LabelList dataKey="date" position="right" />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default Visual;