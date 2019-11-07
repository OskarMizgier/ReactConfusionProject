import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Row, Col } from 'reactstrap';
import DISHES from '../Shared/dishes';
import './DishDetail.css';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class DishDetail extends Component {
constructor(props) {
    super(props)
    this.state = {
        isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
}


toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // event.preventDefault();
}


renderDish () {
    if(this.props.dish != null) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className='row'>
        <div className='col-12 col-md-5 m-1'>
        <Card>
            <CardImg src={this.props.dish.image} alt='' />
            <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
        <div id='CommentClass' className='col-12 col-md-5 m-1'>
            <Card>
            <CardBody>
                <CardTitle>Comments:</CardTitle>
                    {   this.props.comments.map((comment) => {
                        return <ul key={comment.id} className='list-unstyled'>
                                <li>{comment.author + ' ' + comment.date.substring(0, 10) }</li>
                                 <li>{comment.comment}</li>
                                    </ul>
                    })}
                     <button className='btn btn-primary' onClick={this.toggleModal}><span   >&#9829; Add a comment</span></button>
            </CardBody>
            
                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Leave your comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    {/* Row 1 */}
                    <Row className="form-group">
                                <Col>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excellent</option>
                                        <option>Outstanding</option>
                                    </Control.select>
                                </Col>
                            </Row>
                     {/* Row 2 */}
                     <Row className="form-group">
                                <Col>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    {/* Error for the name */}
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            {/* Row 3 */}
                            <Row className="form-group">
                                <Col>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12" placeholder='Please type your comment'
                                        className="form-control" />
                                </Col>
                                </Row>
                                <Row>
                                    <Col className='justify-content-center'> 
                                    <button type='submit' className='btn-primary'>Post your comment</button>
                                    </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </Card>


        </div>
        </div>
        </div>
          
 
            )
    } else 
        return <div>
             </div>
}


render () {
            return (this.renderDish(this.props.selectedDish)
        
            )


           
                 
    }
    
}
        

    

export default DishDetail;








