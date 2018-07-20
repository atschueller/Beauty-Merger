import React from "react";
import Nav from "./src/components/Nav";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <h1>Here Are Your Beauty Results!</h1>
        <br />
        <br />
        <div className="resultsDiv">Results Displayed Here</div>
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Results;
