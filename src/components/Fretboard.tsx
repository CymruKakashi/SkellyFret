import React, { useState } from "react";
import { Col, Container, Dropdown, InputGroup, Row } from "react-bootstrap";
import Board from "./Board";
import "./Fretboard.scss";

export default function Fretboard() {

    const [boardSize, setBoardSize] = useState(13);
    const [strings, setStrings] = useState(6);
    const [tuning, setTuning] = useState(0);
    const [instrument, setInstrument] = useState(0);
    const [naturalOnly, setNaturalOnly] = useState(false);
    const [isBass, setIsBass] = useState(false);

    function switchToGuitar()
    {
        setInstrument(0);
        if(strings < 6)
        {
            setStrings(6);
        }
        setIsBass(false);
    }

    function switchToBass()
    {
        setInstrument(1);
        setStrings(4);
        setIsBass(true);
    }

    return (
    <>
        <Container fluid>
            <h1>SkellyFret</h1>
            <Container fluid id="controlPanel">
                { !isBass &&
                    <Dropdown className="mb-2">
                        <Dropdown.Toggle variant="secondary">
                            Strings
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setStrings(6)}>Six</Dropdown.Item>
                            <Dropdown.Item onClick={() => setStrings(7)}>Seven</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                }
                <Dropdown className="mb-2">
                    <Dropdown.Toggle variant="secondary">
                        Tuning
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setTuning(0)}>Standard</Dropdown.Item>
                        <Dropdown.Item onClick={() => setTuning(2)}>Whole Step Down</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mb-2">
                    <Dropdown.Toggle variant="secondary">
                        Guitar/Bass
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={switchToGuitar}>Guitar</Dropdown.Item>
                        <Dropdown.Item onClick={switchToBass}>Bass</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <Board 
                boardSize={boardSize} 
                strings={strings} 
                tuning={tuning}
                instrument={instrument}
                naturalOnly={naturalOnly}/>
            <Container fluid>
                <Row>
                    <Col>
                        <span>Natural Notes Only </span>
                        <input type='checkbox' onClick={() => setNaturalOnly(!naturalOnly)}></input>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
    );
}