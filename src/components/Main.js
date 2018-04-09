import React, { Component } from 'react';

import SortableTable from './SortableTable';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Main extends Component {
    render() { 
        let selected = this.props.data[this.props.selected]

        let percentParse = (val) => (val / 1000).toFixed(1)

        return (
            <div className="table-container">
                <SortableTable
                    data={
                        selected['data'].map((val) => {
                            val['playoffs'] = val['d1'] + val['d2'] + val['d3'] + val['wc1'] + val['wc2']
                            return val
                        })
                    }
                    defaultSort = "elo"
                    keyheadermap = {{
                        'al': 'L',
                        'aotl': 'OT',
                        'aw': 'W',
                        'conf': 'Conference',
                        'cup': 'Win cup',
                        'd1': '1st div.',
                        'd2': '2nd div.',
                        'd3': '3rd div.',
                        'division': 'Division',
                        'elo': 'Elo',
                        'l': 'L',
                        'name': 'Name',
                        'otl': 'OT',
                        'pres': 'President\'s',
                        'r2': 'Round 2',
                        'r3': 'Conf. Final',
                        'r4': 'Cup Final',
                        'row': 'ROW',
                        'w': 'W',
                        'wc1': 'W.C 1',
                        'wc2': 'W.C.2',
                        'playoffs': 'Make playoffs'
                    }}
                    keybodymap = {{
                        'al': (al) => al.toFixed(1),
                        'aotl': (aotl) => aotl.toFixed(1),
                        'aw': (aw) => aw.toFixed(1),
                        'conf': (conf) => percentParse(conf),
                        'cup': (cup) => percentParse(cup),
                        'd1': (d1) => percentParse(d1),
                        'd2': (d2) => percentParse(d2),
                        'd3': (d3) => percentParse(d3),
                        'division': (division) => division,
                        'elo': (elo) => elo.toFixed(0),
                        'l': (l) => l,
                        'name': (name) => name,
                        'otl': (otl) => otl,
                        'pres': (pres) => percentParse(pres),
                        'r2': (r2) => percentParse(r2),
                        'r3': (r3) => percentParse(r3),
                        'r4': (r4) => percentParse(r4),
                        'row': (row) => row,
                        'w': (w) => w,
                        'wc1': (wc1) => percentParse(wc1),
                        'wc2': (wc2) => percentParse(wc2),
                        'playoffs': (playoffs) => percentParse(playoffs)
                    }}
                    keyOrdering = {[
                        'elo',
                        'name',
                        'division',
                        'w',
                        'l',
                        'otl',
                        'row',
                        'aw',
                        'al',
                        'aotl',
                        'playoffs',
                        'd1',
                        'd2',
                        'd3',
                        'wc1',
                        'wc2',
                        'conf',
                        'pres',
                        'r2',
                        'r3',
                        'r4',
                        'cup'
                    ]}
                />         
            </div>
        )
    }
}

export default Main;