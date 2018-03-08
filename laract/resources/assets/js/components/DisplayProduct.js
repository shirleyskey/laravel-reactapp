import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Product from './Product';
import MyGlobleSetting from './MyGlobleSetting';

class DisplayProduct extends Component {
  constructor(props) {
       super(props);
       this.state = {
         products : []
       }
     }
     componentDidMount(){
       axios.get('http://localhost:8000/api/products')
       .then(response => {
         this.setState({ products: response.data });
         console.log(response.data);
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     
  render(){
     const products = this.state.products.map((product) => {
       return <Product key={product.id} id={product.id} title={product.title} body={product.body}/>;
     })
    return (
      <div>
        <h1>Products</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Product</Link>
          </div>
        </div><br />
        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Product Title</td>
                <td>Product Body</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
            {products}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayProduct;