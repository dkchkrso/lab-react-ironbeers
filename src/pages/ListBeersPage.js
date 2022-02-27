import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import Home from "../assets/home.png";
import axios from "axios";
import { useState, useEffect } from "react";

const APIurl = "https://ih-beers-api2.herokuapp.com/beers";

function ListBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get(APIurl).then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Link to="/">
        <Card.Img src={Home} />
      </Link>
      {beers.map((beers) => (
        <Card>
          <Card.Body>
            <div key={beers._id} className="card">
              <Row>
                <Col>
                  <img
                    src={beers.image_url}
                    height="300"
                    width="100"
                    alt="beers"
                  />
                </Col>
                <Col>
                  <h3>{beers.name}</h3>
                  <p>tagline: {beers.tagline}</p>
                  <p>contributed_by: {beers.contributed_by}</p>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ListBeersPage;
