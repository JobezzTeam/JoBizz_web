import React, { Component, useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Style = {
  margin: '40px',
  border: '5px solid pink',
  marginTop: '10%'
};

class Recruteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          desc: '',
          title: '',
          price: '',
          address: '',
          company: '',
          zipcode: '',
          country: ''
        };
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeZipcode = this.onChangeZipcode.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeDesc(e) {
      this.setState({
        desc: e.target.value
      })
    }

    onChangeTitle(e) {
      this.setState({
        title : e.target.value
      })
    }

    onChangePrice(e) {
      this.setState ({
        price : e.target.value
      })
    }

    onChangeAddress(e) {
      this.setState({
        address : e.target.value
      })
    }

    onChangeCompany(e) {
      this.setState ({
        company : e.target.value
      })
    }

    onChangeZipcode(e) {
        this.setState({
            zipcode : e.target.value
        })
    }

    onChangeCountry(e) {
        this.setState({
            country : e.target.value
        })
    }

    handleSubmit(e) {
      e.preventDefault();
      const newJob = {
        desc: this.state.desc,
        title: this.state.title,
        price: this.state.price,
        address: this.state.address,
        company: this.state.company,
        country: this.state.country,
        zipcode: this.state.zipcode
      };
      console.log(newJob);
      axios.post("http://localhost:4000/annonce/sendJob", newJob)
      .then((response) => {
        if (response.status == 200) {
          console.log("Sent")
        }
        else {
          console.log("ok")
        }
      })
    }

    render() {
        return (
        <div style={Style}>
            <form onSubmit={this.handleSubmit}>
              <br/>
              <label htmlFor="defaultFormRegisterTitleEx" className="grey-text">
                  Titre de l'annonce
                </label>
                <input
                  placeholder="title"
                  type="title"
                  name="title"
                  id="defaultFormRegisterTitleEx"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  />
                  <br />
                  <label htmlFor="defaultFormRegisterPostEx" className="grey-text">
                      Description du post
                  </label>
                    <input
                      placeholder="Description"
                      type="desc"
                      name="desc"
                      id="defaultFormRegisterPostEx"
                      className="form-control"
                      value={this.state.desc}
                      onChange={this.onChangeDesc}
                    />
                      <br/>
                      <label htmlFor="defaultFormRegisterSalaireEx" className="grey-text">
                          Salaire
                      </label>
                      <input
                          placeholder="Salaire"
                          type="price"
                          name="price"
                          id="defaultFormRegisterSalaireEx"
                          className="form-control"
                          value={this.state.price}
                          onChange={this.onChangePrice}
                          />
                        <br/>
                          <label htmlFor="defaultFormRegisterAddresseEx" className="grey-text">
                              Address
                          </label>
                          <input
                              placeholder="Address"
                              type="address"
                              name="address"
                              id="defaultFormRegisterAddressEx"
                              className="form-control"
                              value={this.state.address}
                              onChange={this.onChangeAddress}
                              />
                            <br/>
                          <label htmlFor="defaultFormRegisterCountryEx" className="grey-text">
                              Pays
                          </label>
                              <input
                                  placeholder="Pays"
                                  type="country"
                                  name="country"
                                  id="defaultFormRegisterCountryEx"
                                  className="form-control"
                                  value={this.state.country}
                                  onChange={this.onChangeCountry}
                                />
                          <label htmlFor="defaultFormRegisterZipcodeyEx" className="grey-text">
                              Zipcode
                          </label>
                              <input
                                  placeholder="Zipcode"
                                  type="zipcode"
                                  name="zipcode"
                                  id="defaultFormRegisterZipcodeyEx"
                                  className="form-control"
                                  value={this.state.zipcode}
                                  onChange={this.onChangeZipcode}
                                />
                            <br/>
                          <label htmlFor="defaultFormRegisterCompanyEx" className="grey-text">
                                Nom de l'entreprise
                          </label>
                          <input
                              placeholder="Entreprise"
                              type="company"
                              name="company"
                              id="defaultFormRegisterCompanyEx"
                              className="form-control"
                              value={this.state.company}
                              onChange={this.onChangeCompany}
                            />
                        <input type="submit" value="Envoyer" />
            </form>
          </div>
        );
    }
}

export default Recruteur;
