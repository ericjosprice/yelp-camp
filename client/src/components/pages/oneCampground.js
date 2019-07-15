import React, { Component } from "react";
import Nav from "../nav";
// import Modal from "../modal"
import Header from "../header"
import Row from "../row"
import {BrowserRouter as Route, Link } from "react-router-dom";
import {Button, Modal} from 'react-bootstrap';
import API from "../../utils/API";
import Campgrounds from "./campgrounds";

class  oneCampground extends Component {

    state = {
        campground:{},
        comments:[{comment:"rendering..."}],
        comment:"",
        commentId:"",
        id: "",
        modalShow:false,
        name:"",
        imageURL:"",
        description:""
    }

    // When this component mounts, grab the campground with the _id of this.props.match.params.id
  // e.g. localhost:3000/campgroundss/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getcampground(this.props.match.params.id)
      .then(res =>{ this.setState({ 
        campground: res.data,
        name: res.data.name,
        imageURL: res.data.imageURL,
        description: res.data.description,
        comments:   res.data.comments })})
      .catch(err => console.log(err));

      // do i need to get comments from the comments model or will it come by association?
  }

    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value
        });
      };

        // When the form is submitted, prevent the default event  
    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.comment) {
        API.savecomment({
            comment: this.state.comment,
            ref: this.props.match.params.id
        }).then(res => {
            console.log("res.data")
            console.log(res.data)
            this.setState({campground: res.data, comments: res.data.comments })})
            .catch(err => console.log(err));
        }
        this.setState({comment:""});
    };

    toggleModalOpen = event => {
        this.setState({ modalShow: true
         });
    }

    editCampground = event => {
        event.preventDefault();
    
        if (this.state.name && this.state.imageURL) {
            API.editCampground({
            name: this.state.name,
            imageURL: this.state.imageURL,
            description: this.state.description,
            ref: this.props.match.params.id
            })
            .catch(err => console.log(err));
        }
        this.setState({modalShow: false});
        this.componentDidMount();
     };

    toggleModalClose = event => {
        this.setState({ modalShow: false });
    }

    deleteCampground = event => {
        event.preventDefault();
        API.deleteCampground({id:this.state.campground._id})
        .then( this.redirectToTarget())
        .catch(err => console.log(err));

       
    }
    redirectToTarget = () => {
        this.props.history.push('/campgrounds')
      }

    deleteComment = id => {
        API.deleteComment(id)
        .catch(err => console.log(err))
    }

    render(){
        console.log("what is this.state", this.state)
        return(<div>
                    <Nav />
                    <Modal />
                    <div className="container">

                        <div className="row">
                            <div className="col-md-3">
                                <p>YelpCamp</p>
                                <div className="list-group">
                                    <li className="list-group-item active">
                                        Category 1
                                    </li>
                                    <li className="list-group-item">
                                        Category 2
                                    </li>
                                    <li className="list-group-item">
                                        Category 3
                                    </li>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="thumbnail">
                                    <figure className="figure">
                                    
                                    <img  className="figure-img img-thumbnail img-responsive" style={{padding:'0'}} alt={this.state.campground.name} src={this.state.campground.imageURL} />
                                    <div className="row">
                                        <div className="col-md-8">
                                         <h4>{this.state.campground.name}</h4>
                                        </div>

                                        <div className="col-md-4 justify-content-between">
                                            <button type="button" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#exampleModal" onClick={this.toggleModalOpen}>
                                            Edit campground
                                            </button>
                                            <button className="btn btn-danger btn-sm" onClick={this.deleteCampground}>Delete</button>
                                            
                                        </div>
                                    </div>
                                   
                                    <p>{this.state.campground.description}</p>
                                    </figure>

                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between bg-secondary ">
                            <div className="col-md-4" style={{ margin:'20px 50px'}}>
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control"
                                        type="text"
                                        placeholder="Add Comment"
                                        name="comment"
                                        value={this.state.comment}
                                        onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block" onClick={this.handleFormSubmit}>Comment</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6" >
                                <div style={{ margin:'20px 50px'}}>
                                    <h4>Comments:</h4>
                                    {this.state.comments.map(comment => ( <div>
                                        <p >-{comment.comment} <button 
                                            onClick={() => this.deleteComment(comment._id)}style={{background:"gray",border:"none", borderRadius:"50%", display:"inline"}}>X</button></p>
                                        
                                        </div>
                                    ))}

                                </div>
                            </div>
                            
                        </div>
                    </div>

                    
                    <Modal show={this.state.modalShow}
                        onHide={this.state.modalShow}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit campground: {this.state.campground.name}
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                            <button className="btn btn-primary btn-block" onClick={this.editCampground}>Update</button>
                            </div>
                        </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button onClick={this.toggleModalClose}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
        );
    }
}

export default oneCampground;