import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ProductTwo from "../containers/ProductTwo";

class ProductOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // this checks whether you have a token
  render() {
    if (!this.props.isAuthenticated) {
      console.log("Redirect");
      return <Redirect to="/" />;
    }
    // if you do then the next page is called that checks your token
    return (
      <React.Fragment>
        <ProductTwo />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productReducer.products,
  load: state.authReducer.loading,
  isAuthenticated:
    state.authReducer.token !== null && state.authReducer.token.length > 0
});

const mapReducerToProps = {};

export default connect(mapStateToProps, mapReducerToProps)(ProductOne);
