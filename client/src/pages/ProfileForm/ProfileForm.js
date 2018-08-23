import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import API from "../../utils/htmlapi";
import "./ProfileForm.css";

class ProfileForm extends React.Component {
  state = {
    name: "",
    age: "",
    ethnicity: "",
    eyecolor: "",
    haircolor: "",
    hairtype: "",
    hairdensity: "",
    hairtexture: "",
    skintone: "",
    skintype: "",
    productbrands: [],
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    if (this.state.username) {
      API.saveNewProfile({
        username: this.state.name,
        userage: this.state.age,
        ethnicity: this.state.ethnicity,
        eyecolor: this.state.eyecolor,
        haircolor: this.state.haircolor,
        hairtype: this.state.hairtype,
        hairdensity: this.state.hairdensity,
        hairtexture: this.state.hairtexture,
        skintone: this.state.skintone,
        skintype: this.state.skintype,
        productbrands: this.state.productbrands
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <h1>Please Fill Out Your Profile Form</h1>
        <form className="NewForm" action="/submit" method="post" onSubmit={this.handleReviewSubmit}>
          <div className="basics">Name (Required):</div>
          <input
            type="text"
            className="basicsInput"
            onChange={this.handleInputChange}
            name="name"
          />
          <br />
          <div className="basics">Age(optional):</div>
          <input
            type="text"
            className="basicsInput"
            onChange={this.handleInputChange}
            name="age"
          />
          <br />
          <div className="basics">Ethnicity(optional):</div>
          <input
            type="text"
            className="basicsInput"
            onChange={this.handleInputChange}
            name="ethnicity"
          />
          <br />
          <div className="basics">Eye Color:</div>
          <input
            type="text"
            className="basicsInput"
            onChange={this.handleInputChange}
            name="eyecolor"
          />
          <br />
          <div className="basics">Hair Color:</div>
          <input
            type="text"
            className="basicsInput"
            onChange={this.handleInputChange}
            name="haircolor"
          />
          <br />
          <div className="basics">Hair Type:</div>
          <input
            type="text"
            className="basicsInput"
            placeholder="ex. Straight, Wavy, Curly"
            onChange={this.handleInputChange}
            name="hairtype"
          />
          <br />
          <div className="basics">Hair Density:</div>
          <input
            type="text"
            className="basicsInput"
            placeholder="ex. Thin, Medium, Thick"
            onChange={this.handleInputChange}
            name="hairdensity"
          />
          <br />
          <div className="basics">Hair Texture:</div>
          <input
            type="text"
            className="basicsInput"
            placeholder="ex. Fine, Medium, Coarse"
            onChange={this.handleInputChange}
            name="hairtexture"
          />
          <br />
          <div className="basics">Skin Tone:</div>
          <input
            type="text"
            className="basicsInput"
            placeholder="(ex. Medium/Warm, Fair/Neutral, etc.)"
            onChange={this.handleInputChange}
            name="skintone"
          />
          <br />
          <div className="basics">Skin Type:</div>
          <input
            type="text"
            className="basicsInput"
            placeholder=" ex. Oily, Normal, Dry"
            onChange={this.handleInputChange}
            name="skintype"
          />
          <br />
          <div className="basics">What Are Your Favorite Product Brands?</div>
          <input
            type="text"
            className="basicsInput"
            onChange={this.handleInputChange}
            name="productbrands"
          />
          <br />
          <br />
          <button
            type="submit"
            id="formSubmit"
          >
            Sign Up
          </button>
          <br />
          <br />
        </form>
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}
export default ProfileForm;
