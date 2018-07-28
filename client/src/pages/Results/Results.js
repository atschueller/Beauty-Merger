import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResultsList from "../../components/ResultsList/ResultsList";
import ResultsListItem from "../../components/ResultsList/ResultsListItem";
import API from "../../utils/htmlapi";
import "./Results.css";

class Results extends React.Component {
  state = {
    search: "",
    products: [],
  };
  //componentDidMount() {
   // this.loadAllProducts();
  //}
 // loadAllProducts = () => {
    //API.getAllProducts()
    //  .then(res =>
       // this.setState({
       //   products: res.data,
       // })
     // )
     // .catch(err => console.log(err));
  //};
  handleSearchSubmit = event => {
    event.preventDefault();
    API.getProductByName(this.state.search)
      .then(res => {
        console.log(res.data);
        this.setState({products: res.data, search: ""});
      })
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <div className="searchDiv">
          <h1>Search for A Product</h1>
          <br />
          <br />
          <form className="reviewPost" onSubmit={this.handleSearchSubmit}>
            <input
              type="text"
              className="basicsInput"
              onChange={this.handleInputChange}
              name="search"
              value={this.state.search}
            />
            <br />
            <button className="findProduct">
              Search
            </button>
          </form>
        </div>
        <br />
        <br />
        <div className="resultsDiv">Here Are Your Product Reviews!</div>
        <ResultsList>
          {this.state.products && this.state.products.map(product => {
            return <ResultsListItem {...product} />;
          })}
        </ResultsList>
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Results;
