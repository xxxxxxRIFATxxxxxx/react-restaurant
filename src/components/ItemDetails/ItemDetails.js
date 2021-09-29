import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const [food, setFood] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data.meals[0]));
    }, [id]);

    return (
        <div className="black-bg">
            <Container className="p-5">
                <Card>
                    <Card.Img variant="top" src={food.strMealThumb} />
                    <Card.Body>
                        <Card.Title>{food.strMeal}</Card.Title>
                        <Card.Text>
                            {food.strInstructions}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ItemDetails;