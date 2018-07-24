import React from "react";
import Nav from "./src/components/Nav";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <h1>Welcome to Beauty Merger</h1>
        <br />
        <br />
        <p>
          The ultimate beauty-product resource.
        </p>
        <p>
          Search reviews from other product-lovers with similar beauty needs and get informed before
          you buy.
        </p>
        <br />
        <br />
        <img
          src="css\images\products4.jpg"
          class="center-block"
          width="500px"
          height="400px"
        />
        <br />
        <br />

        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
