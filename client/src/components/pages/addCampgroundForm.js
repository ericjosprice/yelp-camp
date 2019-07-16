import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "../nav";
import API from "../../utils/API"


class AddCampgroundForm extends Component {
  // Setting the initial values of this.state.name and this.state.image
  state = {
    name:"",
    imageURL:"",
    description:""

  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the name and image 
  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.name && this.state.imageURL) {
      API.savecampground({
        name: this.state.name,
        imageURL: this.state.imageURL,
        description: this.state.description
      })
        .catch(err => console.log(err));
    }
    this.redirectToTarget();
  };
  redirectToTarget = () => {
    this.props.history.push('/campgrounds')
  }



  render() {
    console.log(this.state)
    return (<div>
      <Nav />
      <div className="container">
      <h1 style={{textAlign:"center"}}>Create a new campground</h1>
        <div className="row">
          
            <div style={{width:'30%', margin:'30px auto'}}>
              <form>
                {/* <p>Name: {this.state.name}</p> */}
                <div className="formg-roup">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      />
                </div>
                <div className="form-group">
                  <input className="form-control"
                    type="text"
                    placeholder="Image URL"
                    name="imageURL"
                    value={this.state.imageURL}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea className="form-control"
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={this.handleFormSubmit}>Submit</button>
                <Link to="/campgrounds" >Go back</Link>
                </div>
              </form>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default AddCampgroundForm;
