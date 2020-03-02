import React from 'react';
import Table from "./Table";

class ListProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    getCols = () => {
        return ['id', 'name', 'description'];
    };

    componentWillMount = () => {
        fetch('http://api.apibase.com/api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({products: data.data.products});
            });
    };

    render() {
        return (
            <div>
                <Table keyName={'myTable'} columns={this.getCols()} data={this.state.products}/>
            </div>
        );
    }
}

export default ListProducts;