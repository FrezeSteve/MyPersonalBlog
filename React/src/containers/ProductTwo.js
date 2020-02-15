import React from "react";
import { connect } from "react-redux";

import Product from "../containers/Product";

// Action
import { authVerifyToken } from "../redux/actions/authAction";

class ProductTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.authVerifyToken();
  }
  render() {
    return (
      <React.Fragment>
        <Product />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  load: state.authReducer.loading
});

const mapReducerToProps = {
  authVerifyToken
};

export default connect(mapStateToProps, mapReducerToProps)(ProductTwo);
