import React, { Component } from "react";
import { connect } from "react-redux";
import { IonIcon } from "@ionic/react"; //import thư viện icon
import {} from "ionicons/icons"; //chỉ import các icon cần dùng
import "./Home.scss"; //import scss
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        <div className="home-container"></div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
