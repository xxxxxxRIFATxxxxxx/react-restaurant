import React, { useState, useEffect } from 'react';
import { Container, Row, FormControl } from 'react-bootstrap';
import Item from '../Item/Item';

const Menu = () => {
    const [foods, setFoods] = useState([]);
    const [searchFood, setSearchFood] = useState("");
    const handleSearch = event => {
        const searchTextValue = event.target.value;
        setSearchFood(searchTextValue);
    };

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [searchFood]);

    return (
        <div className="black-bg">
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <FormControl
                        placeholder="Search Food"
                        className="mt-5 bg-transparent text-white"
                        onChange={handleSearch}
                    />

                    {
                        foods.map(food => <Item key={food.idMeal} food={food}></Item>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Menu;