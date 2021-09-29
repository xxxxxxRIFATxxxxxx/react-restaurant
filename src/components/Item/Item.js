import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Item = props => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.food
    const url = `/item/${idMeal}`;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 200)}
                    </Card.Text>
                    <NavLink to={url} className="btn btn-info text-white text-decoration-none w-100">Details</NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;