import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Home.css";

class Home extends React.Component {
  MyInput = React.createRef();
  
  goToProfile = event => {
    event.preventDefault();
    const Profile = this.MyInput.value.value;
    this.props.history.push(`/Home/${Profile}`);
  };
  goToResults = event => {
    event.preventDefault();
    const Results = this.MyInput.value.value;
    this.props.history.push(`/Results/${Results}`);
  };
  goToProfileForm = event => {
    event.preventDefault();
    const ProfileForm = this.MyInput.value.value;
    this.props.history.push(`/ProfileForm/${ProfileForm}`);
  };

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
          alt="homePageImage"
          className="center-block"
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
