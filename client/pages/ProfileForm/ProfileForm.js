import React from "react";
import Nav from "./src/components/Nav";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

class ProfileForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <h1>Please Fill Out Your Profile Form</h1>
        <form>
            <p className="questions">
                <strong>Question 1</strong>
            </p>
            <p>Eye Color</p>
            <select className="custom-select" id="q1">
                <option>Select an Option</option>
                <option>Brown</option>
                <option>Black</option>
                <option>Green</option>
                <option>Brown</option>
                <option>Hazel</option>
                <option>Blue</option>
            </select>
            <br />
            <br />
            <p className="questions">
                <strong>Question 2</strong>
            </p>
            <p>Hair Color</p>
            <select className="custom-select" id="q2">
                <option>Select an Option</option>
                <option>Brown</option>
                <option>Black</option>
                <option>Blonde</option>
                <option>Light Brown</option>
                <option>Gray</option>
                <option>Red</option>
                <option>Other</option>
            </select>
            <br />
            <br />
            <p className="questions">
                <strong>Question 3</strong>
            </p>
            <p>Hair Type</p>
            <select className="custom-select" id="q3">
                <option>Select an Option</option>
                <option>Straight</option>
                <option>Wavy</option>
                <option>Curly</option>
                <option>Very Curly</option>
            </select>
            <br />
            <br />
            <p className="questions">
                <strong>Question 4</strong>
            </p>
            <p>Hair Density</p>
            <select className="custom-select" id="q4">
                <option>Select an Option</option>
                <option>Thin</option>
                <option>Medium</option>
                <option>Thick</option>
            </select>
            <br />
            <br />
            <p className="questions">
                <strong>Question 5</strong>
            </p>
            <p>Hair Texture</p>
            <select className="custom-select" id="q5">
                <option>Select an Option</option>
                <option>Fine</option>
                <option>Medium</option>
                <option>Coarse</option>
            </select>
            <br />
            <br />
            <p className="questions">
                <strong>Question 6</strong>
            </p>
            <p>Skin Type</p>
            <select className="custom-select" id="q6">
                <option>Select an Option</option>
                <option>Oily</option>
                <option>Oily/Normal</option>
                <option>Normal</option>
                <option>Dry/Normal</option>
                <option>Dry</option>
            </select>
            <br />
            <br />
            <div className="basics">Name (Required):</div>
            <input type="text" class="basicsInput" />
            <br />
            <div className="basics">Age(optional):</div>
            <input type="text" class="basicsInput" />
            <br />
            <div className="basics">Ethnicity(optional):</div>
            <input type="text" class="basicsInput" />
            <br />
            <div className="basics">Describe Your Skin Tone:</div>
            <input type="text" class="basicsInput" placeholder="(ex. Medium/Warm, Fair/Neutral, etc.)" />
            <br />
            <div className="basics">What Are Your Favorite Product Brands?</div>
            <input type="text" class="basicsInput" />
            <br />
            <br />
            <button type="submit" id="formSubmit" className="btn btn-lg">Submit</button>
            <br />
            <br />
            <br />
            <br /> 
            </form>
         <Footer />
      </React.Fragment>
    );
  }
}
export default ProfileForm;