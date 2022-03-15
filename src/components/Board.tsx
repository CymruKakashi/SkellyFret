import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BoardProps } from "../models/BoardProps";
import Note from "./Note";

export default function Board(props: BoardProps) {
    const fretNumbers = [...Array(props.boardSize)].map((val, fret) => {
        return (
            <Col key={'fret'+fret}>
                {fret}
            </Col>
        );
    });
    const rows = [...Array(props.strings)].map((e, string) => 
    {
        const cols = [...Array(props.boardSize)].map((val, fret) => {
            return (
                <Col key={fret} className="fret">
                    <Note tuning={props.tuning} string={string} fret={fret}/>
                </Col>
            );
        });
        return (
            <Row key={string}>
                {cols}
            </Row>
        )
    });
    return (
    <>
        <Container fluid className="fretboard">
            <Row>
                {fretNumbers}
            </Row>
            {rows}
        </Container>
    </>
    );
}