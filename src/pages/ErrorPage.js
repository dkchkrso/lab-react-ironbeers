import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Home from "../assets/home.png";


const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

function ErrorPage() {
  return (
    <div>
      <Link to="/">
        <Card.Img src={Home} />
      </Link>
      <h1>404</h1>
      <Alert variant="success">404 This is an Alert Message with variant</Alert>
      <img src={imgURL} alt="404 error gif" className="page-img" />
    </div>
  );
}

export default ErrorPage;
