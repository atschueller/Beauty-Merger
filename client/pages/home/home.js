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
          The ultimate resource for reviewing, rating, and connecting with other
          product lovers.
        </p>
        <p>
          Find fellow users with similar beauty needs and get informed before
          you purchase.
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
