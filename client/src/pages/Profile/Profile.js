import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import API from "../../utils/htmlapi";
import "./Profile.css";

class Profile extends React.Component {
  state = {
    products: [],
    name: "",
    brand: "",
    url: "",
    review: ""
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = () => {
    API.getAllProducts()
      .then(res =>
        this.setState({
          products: res.data,
          name: "",
          brand: "",
          url: "",
          review: ""
        })
      )
      .catch(err => console.log(err));
  };
  handleReviewSubmit = event => {
    event.preventDefault();

    const newFormData = {
      name: this.state.name,
      brand: this.state.brand,
      url: this.state.url,
      review: this.state.review
    };
    console.log("handleReviewSubmit called", newFormData);
    if (this.state.name && this.state.brand && this.state.review) {
      API.saveProductReview(newFormData).then(res => this.loadProducts());
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <h1>This is Your Profile</h1>
        <br />
        <div className="container">
          <div className="profileDiv">
            <div className="topic">Name:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Age(optional):</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Ethnicity:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Eye Color:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Hair Color:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Hair Type:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Hair Density:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Hair Texture:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Skin Tone:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Skin Type:</div>
            <div className="inputDiv" />
            <br />
            <div className="topic">Favorite Product Brands:</div>
            <div className="inputDiv" />
            <br />
            <br />
          </div>
          <div className="topic">Write a Review</div>
          <form className="reviewForm" action="/submit" method="post" onSubmit={this.handleReviewSubmit}>
            <input
              className="newReview"
              onChange={this.handleInputChange}
              name="name"
              placeholder="Product Name (required)"
            />
            <br />
            <input
              className="newReview"
              onChange={this.handleInputChange}
              name="brand"
              placeholder="Brand (required)"
            />
            <br />
            <input
              className="newReview"
              onChange={this.handleInputChange}
              name="url"
              placeholder="URL (required)"
            />
            <br />
            <textarea
              className="newReview"
              onChange={this.handleInputChange}
              name="review"
              placeholder="Review (required)"
            />
            <br />
            <button
            //disabled={
            //!(
            // this.state.name &&
            //this.state.brand &&
            //this.state.url &&
            //this.state.review
            //)
            //}
            >
              Submit Product Review
            </button>
          </form>
          <br />
          <br />
          <div className="topic">
            <div>My Previous Reviews:</div>
            <div>(reviews)</div>
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Profile;
