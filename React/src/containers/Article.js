import React, { Component } from "react";

import ArticleComponent from "../components/article";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
// Actions
import {
  getDetailArticle,
  publishProduct
} from "../redux/actions/productAction";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getDetailArticle(this.props.match.params.pid);
  }
  OnPublish = (PID, event) => {
    console.log("published: ", PID);
    this.props.publishProduct(PID);
  };
  render() {
    const item = this.props.products[0] || [];
    const spinner = (
      <div style={{ width: "100%" }} className="text-center mt-5 pt-5 mt-sm-0">
        <div className="mt-5"></div>
        <Spinner animation="border" variant="success" size="lg" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
    return (
      <React.Fragment>
        {this.props.load ? (
          spinner
        ) : (
          <ArticleComponent
            item={item}
            OnPublish={this.OnPublish.bind(this, this.props.match.params.pid)}
            isAdmin={this.props.isAdmin}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  products: state.productReducer.products,
  load: state.productReducer.loading_get,
  isAdmin:
    state.authReducer.token !== null && state.authReducer.token.length > 0
});
const mapReducerToProps = {
  getDetailArticle,
  publishProduct
};
export default connect(mapStateToProps, mapReducerToProps)(Article);
