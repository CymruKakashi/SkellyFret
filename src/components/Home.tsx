import React from "react";
import { Container } from "react-bootstrap";
import routes from "../constants/routes.json";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    public render() {
        return (
        <>
            <Container>
                <h1>Hello World</h1>
                <Link to={routes.ABOUT}>About</Link>
            </Container>
        </>
        );
    }
}