import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event) {
  event.preventDefault();
  let uri = MyGlobleSetting.url + `/api/products/${this.props.id}`;
  axios.delete(uri).then(() => {
    browserHistory.push('/display-item');
  });
}

render () {
  return (
          <tr>
            <td>
              {this.props.id}
            </td>
            <td>
              {this.props.title}
            </td>
            <td>
              {this.props.body}
            </td>
            <td>
            <form onSubmit={this.handleSubmit}>
              <Link to={"edit/"+this.props.id} className="btn btn-primary">Edit</Link>
              <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
            </td>
          </tr>
  )
}
}
export default Product;