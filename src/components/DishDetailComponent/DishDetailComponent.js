import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, } from 'reactstrap';
import DISHES from '../Shared/dishes';
import './DishDetail.css';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap'


class DishDetail extends Component {
constructor(props) {
    super(props)

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
            </CardBody>

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








