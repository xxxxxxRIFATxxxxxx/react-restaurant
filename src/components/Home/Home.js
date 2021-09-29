import React from 'react';
import './Home.css';
import donuts from '../../images/donuts.png';
import { Card, CardGroup, Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home-container">
            <Container>
                <CardGroup>
                    <Card className="border-0 bg-transparent">
                        <div className="d-flex justify-content-center align-items-center">
                            <Card.Img variant="top" className="donuts" src={donuts} />
                        </div>
                    </Card>

                    <Card className="border-0 bg-transparent">
                        <Card.Body className="d-flex justify-content-center align-items-center">
                            <div>
                                <Card.Title className="display-3 text-info">React Restaurant</Card.Title>
                                <Card.Text className="text-white">
                                    Purchase your favorite food
                                </Card.Text>
                                <Button variant="info" className="text-white px-4 btn-animation" size="lg">Menu</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Home;