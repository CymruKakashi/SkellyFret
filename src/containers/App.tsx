import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./HomePage";
import routes from "../constants/routes.json";

export default function App() {
  return (
    <HomePage />
  );
}
