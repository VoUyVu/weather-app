import React, { useState } from "react";
// import { Form, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const API_KEY = "2f2f41afb6b00fc3033ddda3729af5a4";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);


  //Call API Function - Hàm gọi API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    setWeather(response.data);
  };

  return (
    <div>
      <h1>Weather Information</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Search City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col xs={3}>
            <Button type="submit" className="button">Search</Button>
          </Col>
        </Row>
      </Form>
      {weather && (
        <Card>
          <Card.Body>
            <Card.Title>{weather.name}</Card.Title>
            <Card.Text>
              {weather.main.temp} °C, {weather.weather[0].description}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Weather;