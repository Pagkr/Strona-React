import React from 'react';
import { Card, Button } from 'react-bootstrap';

const GCard = ({ grad }) => {
    return (
<Card className='GradCard'>
  <Card.Img className='img' variant="top" src={grad.img}/>
  <Card.Body>
    <Card.Title className='name'>{grad.name}</Card.Title>
    <Card.Text className='kategria'>{grad.kategria}</Card.Text>
    <Card.Text className='plec'>{grad.plec}</Card.Text>
    <Button 
    className='card_button'
    href={grad.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    variant="light">Sprawdź</Button>
  </Card.Body>
</Card>
    );
}

export default GCard;