import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListProducts from "./ListProducts";
import CreateProduct from "./CreateProduct";

function Main() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/products">List Products</Link>
                    </li>
                    <li>
                        <Link to="/products/new">Create Product</Link>
                    </li>
                </ul>
            </nav>
            <article>
                <Switch>
                    <Route exact path={'/products'} component={() => <ListProducts/>}/>
                    <Route exact path={'/products/new'} component={() => <CreateProduct />}/>
                </Switch>
            </article>
        </Router>
    );
}

export default Main;