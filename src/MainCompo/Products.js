import React, { Component } from 'react'
import Images from '../Constand'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemsList from './ItemsList';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [
                { title: "adidas", src: (Images.i1), price: "$13.", size: "7,8,9,10" },
                { title: "Card Titel", src: (Images.i2), price: "$13.", size: "7,8,9,10" },
                { title: "Card Titel", src: (Images.i3), price: "$13.", size: "7,8,9,10" },
                { title: "Card Titel", src: (Images.i4), price: "$13.", size: "7,8,9,10" },
                { title: "Card Titel", src: (Images.i5), price: "$13.", size: "7,8,9,10" },
                { title: "Card Titel", src: (Images.i6), price: "$13.", size: "7,8,9,10" },
                { title: "Card Titel", src: (Images.c1), price: "$13.", size: "7,8,9,10" },
                { title: "Card Titel", src: (Images.c3), price: "$13.", size: "7,8,9,10" },
            ]
        }
    }
    render() {
        const { cards } = this.state;
        return <div style={{ backgroundColor: "darkgrey" }} >
            <Container>
                <Row>
                    {
                        cards.map((src, index) => (
                            <Card key={index} style={{ width: '18rem', margin: "15px" }}>
                                <Card.Img variant="top" style={{ height: "215px" }} src={src.src} ></Card.Img>
                                <Card.Body>
                                    <Card.Title>{src.title}</Card.Title>
                                    <Card.Title>{src.price}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Title>Size:{src.size}</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Row>
            </Container>
            {/* <ItemsList cards={cards} /> */}
        </div>
    }
}
export default Products
