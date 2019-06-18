import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
