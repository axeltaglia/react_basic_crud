import React from 'react';

class Row extends React.Component {
    render() {
        const {keyName, columns, data} = this.props;

        const fields = columns.map((fieldName, counter) => {
           return (
               <td key={keyName + '-td-' + counter}>{data[fieldName]}</td>
           );
        });
        return <tr>{fields}</tr>;
    }
}

export default Row;