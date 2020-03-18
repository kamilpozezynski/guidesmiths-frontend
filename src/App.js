import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import getPhones from "./services/getPhones";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";
import Phone from "./components/Phone";
import Loader from "./components/Loader";

class App extends Component {
  constructor() {
    super();
    this.state = { phones: [], loading: true };
  }
  getAllPhones = async () => {
    const phones = await getPhones();
    this.setState({ phones: phones });
    this.setState({ loading: false });
  };
  componentDidMount() {
    this.getAllPhones();
  }
  renderPhone = phones => {
    return phones.map(phone => (
      <Phone
        phone={phone}
        key={`${phone.name}${phone.id}`}
      ></Phone>
    ));
  };
  render() {
    const { phones } = this.state;
    return (
      <div>
        <Header></Header>
        <Container>
          <Row className="mb-5">
              {this.state.loading === false ? (
                this.renderPhone(phones)
              ) : (
                <div className="mx-auto mt-5">
                  <Loader/>
                </div>
              )}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  //setPhone: value => dispatch(setPhone(phone))
});
const AppConntected = connect(null, mapDispatchToPropsActions)(App);

export default AppConntected;
