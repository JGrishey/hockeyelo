import React, { Component } from 'react';

import Cell from './Cell';

class TableBody extends Component {
    render() {

        let customParse = (num) => {
            if (num < 1 && num > 0) {
                return "<1";
            } else if (num > 99 && num < 100) {
                return ">99";
            } else {
                return Math.round(num);
            }
        }

        return (
            <tbody>
                {this.props.data["data"].map((team) => {
                    const elo = Math.round(team["elo"])
                    const diff = Object.keys(this.props.prevData).length === 0 && this.props.prevData.constructor === Object ? 0 : Math.round(elo - this.props.prevData["data"].find(t => t.name === team["name"])["elo"])
                    const playoff = (team["d1"] + team["d2"] + team["d3"] + team["wc1"] + team["wc2"]) / 1000.00
                    const record = team["w"] + "-" + team["l"] + "-" + team["otl"]
                    const division = team["d1"] / 1000.00
                    const conference = team["conf"] / 1000.00
                    const pres = team["pres"] / 1000.00
                    const cup = team["cup"] / 1000.00
                    const myRe = /\s(\w+)$/
                    const name = myRe.exec(team["name"])[0]

                    return (
                        <tr 
                            key={name}
                            style={{
                                borderBottomColor: "rgba(0,0,0,0.2)",
                                borderBottomWidth: "1px",
                                borderBottomStyle: "solid"
                            }}
                        >
                            <Cell content={elo} color="#fff" textAlign="center" />
                            <Cell content={diff > 0 ? "+" + diff : diff} 
                                color={
                                    diff > 0 ?
                                            "rgba(46, 204, 113,1.0)"
                                        :
                                            diff === 0 ?
                                                "#fff"
                                                :
                                                "rgba(231, 76, 60,1.0)"
                                }
                                textAlign="center"
                            />
                            <Cell content={(<span>{name} <span style={{opacity: 0.5, whiteSpace: 'nowrap'}}>{record}</span></span>)} color="#fff" />
                            <Cell content={customParse(playoff) + "%"} color={"rgba(2, 136, 209," + playoff / 100 + ")"} />
                            <Cell content={customParse(division) + "%"} color={"rgba(2, 136, 209," + division / 100 + ")"} />
                            <Cell content={customParse(conference) + "%"} color={"rgba(2, 136, 209," + conference / 100 + ")"} />
                            <Cell content={customParse(pres) + "%"} color={"rgba(2, 136, 209," + pres / 100 + ")"} />
                            <Cell content={customParse(cup) + "%"} color={"rgba(231, 76, 60," + cup / 100 + ")"} />
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}

export default TableBody;