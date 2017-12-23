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
                            <img style={{maxWidth: '20px', maxHeight: '20px'}} src={this.props.awayTeamLogo}/>
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
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>
                            <img style={{maxWidth: '20px', maxHeight: '20px'}} src={this.props.homeTeamLogo}/>
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
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Game;