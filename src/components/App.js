import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Today from './Today';

import axios from 'axios';
import 'loaders.css';

class App extends Component {
    constructor () {
        super();

        this.state = {
            data: [],
            fetching: true,
            selected: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    fetchData () {
        return axios.get('https://raw.githubusercontent.com/JGrishey/hockeyelo-data/master/data/results2017-18.json')
                    .then((response) => {
                        this.setState({
                            fetching: false,
                            data: response.data.map((block) => {
                                return {
                                    ...block,
                                    data: block["data"].sort((a, b) => b.elo - a.elo)
                                }
                            }),
                            selected: response.data.length - 1
                        });
                    }).catch((error) => {
                        console.error(error);
                    })
    }

    transformDataForChart (data) {
        return data.map((block) => {
            let temp = {};
            temp['date'] = block['date'];
            block['data'].forEach((team) => {
                temp[team['name']] = team['elo']
            });
            return temp;
        })
    }

    handleChange (e) {
        this.setState({selected: Number(e.target.value)})
    }

    componentWillMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <Header />
                {
                    !this.state.fetching ?
                        (
                            <div className="container-fluid">
                                <div className="row justify-content-center mb-2">
                                    <div className="col-12 col-lg-2">
                                        <label style={{textTransform: 'uppercase'}}>Time</label>
                                        <select
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.selected}
                                            className="w-100"
                                        >
                                            {this.state.data.map((block, index) => {
                                                return (
                                                    <option value={index} key={index}>{block["date"]}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <Main data={this.state.data} selected={this.state.selected} />
                            </div>
                        )
                    :
                        <div className="line-scale-pulse-out-rapid loader" style={{textAlign: 'center', padding: '1em'}}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                }
            </div>
        );
    }
}

export default App;
