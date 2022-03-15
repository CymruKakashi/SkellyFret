import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Board from "./Board";
import "./Fretboard.scss";

export default function Fretboard() {

    const [boardSize, setBoardSize] = useState(13);
    const [strings, setStrings] = useState(6);
    const [tuning, setTuning] = useState(0);

    return (
    <>
        <Container fluid>
            <h1>SkellyFret</h1>
            <Board 
                boardSize={boardSize} 
                strings={strings} 
                tuning={tuning}/>
        </Container>
    </>
    );
}