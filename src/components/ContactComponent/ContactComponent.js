import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link  } from 'react-router-dom';

class  Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }



handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name;
    this.setState({
        [name]: value
    })
}

handleSubmit(event) {
    console.log('Current state is ' + JSON.stringify(this.state))
    alert('Current state is ' + JSON.stringify(this.state))
    event.preventDefault();
}


render () {
    return (
        <div className="container">

<div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-12'>
                    <h3 className='mb-4'>Send us your Feedback</h3>
                </div>
                <div className='col-12 col-md-9'>
                    <Form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                             <input onChange={this.handleInputChange} id='firstname' name='firstname' type="text" class="form-control" placeholder="First name" value={this.state.firstname}></input>
                         </div>
                    <div className="col">
                             <input onChange={this.handleInputChange} name='lastname' id='lastname' type="text" class="form-control" placeholder="Last name" value={this.state.lastname}></input>
                     </div>
                    </div>
                    <div className='form-row mt-4'>
                    <div className="col-6">
                             <input onChange={this.handleInputChange} name='telnum' id='telnum' type="tel" class="form-control" placeholder="Tel. Number" value={this.state.telnum}></input>
                     </div>
                     <div className="col-6">
                             <input onChange={this.handleInputChange} name='email' id='email' type="email" class="form-control" placeholder="Email" value={this.state.email}></input>
                     </div>
                    </div>
                    <div className='form-row mt-4'>
                       <div className='col-6'>
                           <input onChange={this.handleInputChange} className='mr-1' id='agree' type='checkbox' name='agree' checked={this.state.agree}></input>
                           <label for='agree'><h6><strong> May we contact you?</strong></h6></label>
                       </div>
                       <div className='col-3'>
                           <select  onChange={this.handleInputChange} className='custom-select mr-sm-2' type='select' id='contactType' name='contactType' value={this.state.contactType}>
                               <option selected>Tel.</option>
                               <option>Email</option>
                           </select>
                       </div>
                    </div>
                    <FormGroup className='mt-4' row>
                                <Col md={12}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12" placeholder='Please provide your feedback'
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                    <div className='form-row mt-4'>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Send Feedback</button>
                        </div>
                    </div>
                    
                    </Form>
                </div>
            </div>
        </div>
    );
}
   
}

export default Contact;