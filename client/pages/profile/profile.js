import React from "react";
import Nav from "./src/components/Nav";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <h1>My Profile</h1>
        <br />
        <div class="container">
          <div class="profileDiv">
            <div class="topic">Name:</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Age(optional):</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Ethnicity:</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Eye Color:</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Hair Color:</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Hair Type:</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Skin Tone:</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Skin Type:</div>
            <div class="inputDiv" />
            <br />
            <div class="topic">Favorite Product Brands:</div>
            <div class="inputDiv" />
            <br />
            <br />
          </div>
          <div class="reviewContainer">
            <div class="topic">Write a Review</div>
            <input type="text" class="reviewInput" />
            <br />
            <br />
            <button type="submit" class="btn btn-md" id="submit">
              Submit
            </button>
            <br />
            <br />
            <div class="topic">
              <div>My Previous Reviews:</div>
              <div>(reviews)</div>
            </div>
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
