import React, { Component } from 'react';


import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Main extends Component {
    render() { 
        let selected = this.props.data[this.props.selected]

        return (
            <div className="table-container">
                <table className="elo-standings">
                    <TableHeader 
                        headers={
                            !this.props.data[this.props.selected]['playoffs'] ?
                                [
                                    'Elo',
                                    (<span>&#9651;</span>),
                                    '',
                                    'Team',
                                    'Make Playoffs',
                                    'Win Division',
                                    'Win Conference',
                                    'Win Presidents',
                                    'Win Cup'
                                ]
                            :
                                [
                                    'Elo',
                                    (<span>&#9651;</span>),
                                    '',
                                    'Team',
                                    'Make Playoffs',
                                    'Win Division',
                                    'Win Conference',
                                    'Win Presidents',
                                    'Win Cup'
                                ]
                        }
                    />
                    <TableBody
                        playoffs={selected['playoffs']}
                        data={selected}
                        prevData={this.props.selected === 0 ? {} : this.props.data[this.props.selected - 1]}
                    />
                </table>                    
            </div>
        )
    }
}

export default Main;