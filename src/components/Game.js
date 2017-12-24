import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <table className="game-table m-2" style={{
                backgroundColor: "#fff",
                boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
                width: "325px"
            }}>
                <tbody>
                    <tr>
                        <td style={{textAlign: "center"}}>
                            <img alt={this.props.away} style={{maxWidth: '20px', maxHeight: '20px'}} src={this.props.awayTeamLogo}/>
                        </td>
                        <td style={{textAlign: "left"}}>
                            {this.props.away}
                        </td>
                        <td style={{
                            backgroundColor: "rgba(231, 76, 60," + this.props.awayProb + ")",
                            textAlign: "center"
                        }}>
                            {Math.round(this.props.awayProb * 100) + "%"}
                        </td>
                        <td style={{
                            backgroundColor: "rgba(0,0,0,0.1)",
                            textAlign: "center"
                        }}>
                            {
                                this.props.final ?
                                    this.props.awayScore > this.props.homeScore ?
                                         <span>&#10003; {this.props.awayScore}</span>
                                    :
                                        this.props.awayScore
                                : this.props.current ?
                                    this.props.awayScore
                                :
                                    "TBD"
                            }
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>
                            <img alt={this.props.home} style={{maxWidth: '20px', maxHeight: '20px'}} src={this.props.homeTeamLogo}/>
                        </td>
                        <td style={{textAlign: "left"}}>
                            {this.props.home}
                        </td>
                        <td style={{
                            backgroundColor: "rgba(231, 76, 60," + this.props.homeProb + ")",
                            textAlign: "center"
                        }}>
                            {Math.round(this.props.homeProb * 100) + "%"}
                        </td>
                        <td style={{
                            backgroundColor: "rgba(0,0,0,0.1)",
                            textAlign: "center"
                        }}>
                            {
                                this.props.final ?
                                    this.props.homeScore > this.props.awayScore ?
                                         <span>&#10003; {this.props.homeScore}</span>
                                    :
                                        this.props.homeScore
                                : this.props.current ?
                                    this.props.homeScore
                                :
                                    "TBD"
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Game;