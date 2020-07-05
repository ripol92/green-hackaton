import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'

import './faqs.scss';

import ic_arrow_down from '../../../../../shared/assets/images/ic_arrow_down.svg';

function Faqs(props) {

    const items = props.params && props.params.length > 0 ?
        props.params.map((item, index) =>
            <Card key={index}>
                <Card.Header>
                    <Accordion.Toggle 
                        as={Button} 
                        variant="link" 
                        eventKey={item.id}>
                        {item.question}
                        <img src={ic_arrow_down} alt="ic_arrow_down" />
                    </Accordion.Toggle>
                    {/* <Accordion.Toggle 
                        as={Button} 
                        variant="link" 
                        className="arrow"
                        eventKey={item.id}>
                        <img src={ic_arrow_down} alt="ic_arrow_down" />
                    </Accordion.Toggle> */}
                </Card.Header>
                <Accordion.Collapse eventKey={item.id}>
                    <Card.Body>{item.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        ) : <></>

    return (
        <div className="Faqs">
            <Accordion>
                {items}
            </Accordion>
        </div>
    );
}

export default Faqs;