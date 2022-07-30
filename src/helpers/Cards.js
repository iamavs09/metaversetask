import React from 'react'
import image1 from "../assets/image 36.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../helpers/Card.css"


function Cards() {

    const cardInfo =[
        {
            image:image2,
            title:"Experimental Centre",
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam natus odio saepe, ratione tempora.',
            button:"Book Now"
        },
        {
            image:image1,
            title:"Race track",
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam natus odio saepe, ratione tempora.',
            button:"Book Now"
        },
        {
            image:image3,
            title:"Gallery",
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam natus odio saepe, ratione tempora.',
            button:"Book Now"
        },
        {
            image:image4,
            title:"Planatarium",
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam natus odio saepe, ratione tempora.',
            button:"Book Now"
        },
        {
            image:image5,
            title:"Go karting Track",
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam natus odio saepe, ratione tempora.',
            button:"Book Now"
        }
    ];

const renderCard = (card, index) =>{
    return(
        <Card  className='card-help'  style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" src = {card.image}/>
        <Card.Body id='card-body'>
          <div className="polygon">
          <Card.Title className='title'>{card.title}</Card.Title>
          <Card.Text className='text'>
            {card.text}
          </Card.Text>
          </div>
          <Button className='card-button' variant="secondary">{card.button}</Button>
        </Card.Body>
      </Card>
    )
}

  return (
    <div className='helping-cards'>
        {cardInfo.map(renderCard)}

    </div>
  )
}

export default Cards;