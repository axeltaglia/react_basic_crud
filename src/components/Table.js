import React from 'react';
import Row from "./Row";


class Table extends React.Component {
    render() {
        const {keyName, columns, data} = this.props;
        const headers = columns.map((title, counter) => {
            return <th key={'table-' + keyName + '-th-' + counter}>{title}</th>;
        });
        const rows = data.map((dataRow, counter) => {
            return <Row key={'table-' + keyName + '-row-' + counter} keyName={'table-' + keyName + '-row-' + counter} columns={columns} data={dataRow}/>
        });
        return (
            <div key={keyName}>
                <table className={'Table'}>
                    <thead><tr>{headers}</tr></thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default Table;