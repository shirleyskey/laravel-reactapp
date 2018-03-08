import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Master from '../components/Master';
// import CreateProduct from '../components/Product/CreateProduct';
// import DisplayProduct from '../components/Product/DisplayProduct';
// import UpdateProduct from '../components/Product/UpdateProduct';
import asyncComponent from '../hoc/asyncComponent';

const AsyncCreateNewProduct = asyncComponent(() => {
    return import('../components/Product/CreateProduct/CreateProduct');
});

const AsyncDislayProduct = asyncComponent(() => {
    return import('../components/Product/DisplayProduct/DisplayProduct');
});

const AsyncUpdateProduct = asyncComponent(() => {
    return import('../components/Product/UpdateProduct/UpdateProduct');
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Master} />
        <Route path="/add-item" component={AsyncCreateNewProduct} />
        <Route path="/display-item" component={AsyncDislayProduct} />
        <Route path="/edit/:id" component={AsyncUpdateProduct} />
      </div>
    );
  }
}

export default App;
