import React from 'react';
import Card from 'react-bootstrap/Card';
import image from "../assets/desktop.png"
import "../helpers/Card2.css"

function Card2() {

    const cardInfo2 = [
        {
            image:image,
            title:"Cross Platform",
            Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, sapiente ad accusamus obcaecati architecto iste molestias nobis?"

        },
        {
            image:image,
            title:"Cross Platform",
            Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, sapiente ad accusamus obcaecati architecto iste molestias nobis?"

        },
        {
            image:image,
            title:"Cross Platform",
            Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, sapiente ad accusamus obcaecati architecto iste molestias nobis?"

        },
        {
            image:image,
            title:"Cross Platform",
            Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, sapiente ad accusamus obcaecati architecto iste molestias nobis?"

        },
        {
            image:image,
            title:"Cross Platform",
            Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, sapiente ad accusamus obcaecati architecto iste molestias nobis?"

        },
        {
            image:image,
            title:"Cross Platform",
            Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, sapiente ad accusamus obcaecati architecto iste molestias nobis?"

        }
    ];


    const renderCard = (card, index) =>{
        return(
        <div className="selection">
            <Card  style={{ width: '21rem' }} key={index} className="what-card-container">
                <div className="what-box">
                <Card.Img variant="top" src="holder.js/50px50"  src={image} className="what-img" />
                <Card.Title className='what-title'>{card.title}</Card.Title>
                </div>
            
            <Card.Body className='what-card-body'>
                {/* <Card.Title className='what-title'>{card.title}</Card.Title> */}
                <Card.Text className='what-text'>
                {card.Text}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        )



    }

  return (
    <div className='what-card'>
        {cardInfo2.map(renderCard)}

    </div>
  )
}

export default Card2;