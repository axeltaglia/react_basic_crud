import React from 'react';
import Main from "./Main";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h4>Products CRUD</h4>
                </header>
                <section>
                    <Main/>
                </section>
            </div>
        );
    }
}

export default Layout;