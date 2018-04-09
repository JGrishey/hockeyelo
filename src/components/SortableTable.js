import React, { Component } from "react";

export default class SortableTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortDirection: true,
            sortField: this.props.defaultSort
        };

        this.toggleDirection = this.toggleDirection.bind(this);
        this.selectField = this.selectField.bind(this);
    }

    toggleDirection() {
        const { sortDirection } = this.state;

        this.setState({
            sortDirection: !sortDirection
        });
    }

    selectField(e) {
        const sortField = e.target.getAttribute("data-key");
        this.setState({
            sortField
        });
    }

    render() {
        const { data, keyheadermap, keybodymap, keyOrdering } = this.props;
        const { sortField, sortDirection } = this.state;

        const reorderedData = data.sort((a, b) => {
            a = a[sortField];
            b = b[sortField];
            if (a < b) {
                return sortDirection ? 1 : -1;
            }
            if (a > b) {
                return sortDirection ? -1 : 1;
            }
            return 0;
        });

        return (
            <table>
                <thead>
                    <tr>
                        {keyOrdering
                            ? keyOrdering.map(key => {
                                  return (
                                      <th
                                          className={
                                              key === sortField
                                                  ? sortDirection
                                                      ? "sorted desc"
                                                      : "sorted asc"
                                                  : ""
                                          }
                                          onClick={
                                              key === sortField
                                                  ? this.toggleDirection
                                                  : this.selectField
                                          }
                                          data-key={key}
                                          key={key}
                                      >
                                          {keyheadermap[key]}
                                      </th>
                                  );
                              })
                            : Object.keys(data[0]).map(key => {
                                  return (
                                      <th
                                          className={
                                              key === sortField
                                                  ? sortDirection
                                                      ? "sorted desc"
                                                      : "sorted asc"
                                                  : ""
                                          }
                                          onClick={
                                              key === sortField
                                                  ? this.toggleDirection
                                                  : this.selectField
                                          }
                                          data-key={key}
                                          key={key}
                                      >
                                          {keyheadermap[key]}
                                      </th>
                                  );
                              })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((record, num) => {
                        return (
                            <tr key={num}>
                                {keyOrdering
                                    ? keyOrdering.map((key, num2) => {
                                          return (
                                              <td
                                                  className={
                                                      key === sortField
                                                          ? "sorted-td"
                                                          : ""
                                                  }
                                                  key={num2}
                                              >
                                                  {keybodymap[key](record[key])}
                                              </td>
                                          );
                                      })
                                    : Object.keys(record).map((key, num2) => {
                                          return (
                                              <td
                                                  className={
                                                      key === sortField
                                                          ? "sorted-td"
                                                          : ""
                                                  }
                                                  key={num2}
                                              >
                                                  {keybodymap[key](record[key])}
                                              </td>
                                          );
                                      })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
