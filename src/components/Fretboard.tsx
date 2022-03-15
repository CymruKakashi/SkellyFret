import React, { useState } from "react";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import Board from "./Board";
import "./Fretboard.scss";

export default function Fretboard() {

    const [boardSize, setBoardSize] = useState(13);
    const [strings, setStrings] = useState(6);
    const [tuning, setTuning] = useState(2);
    const [instrument, setInstrument] = useState(0);
    const [naturalOnly, setNaturalOnly] = useState(false);

    return (
    <>
        <Container fluid>
            <h1>SkellyFret</h1>
            <Container fluid>
                <Row>
                    <Col>
                        <span>Natural Notes Only</span>
                        <input className="ml-1" type='checkbox'></input>
                    </Col>
                </Row>
            </Container>
            <Board 
                boardSize={boardSize} 
                strings={strings} 
                tuning={tuning}
                instrument={instrument}
                naturalOnly={naturalOnly}/>
        </Container>
    </>
    );
}