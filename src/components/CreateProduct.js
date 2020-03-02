import React from 'react';
import {Redirect} from 'react-router-dom';

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            submit: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        fetch('http://api.apibase.com/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
            })
        }).then(() => {
            this.setState({name: '', description: '', submit: true});
        })
        ;
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Description:
                    <input
                        name="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
                {
                    this.state.submit &&
                    (<Redirect to={'/products'}/>)
                }
            </div>
        );
    }
}

export default CreateProduct;