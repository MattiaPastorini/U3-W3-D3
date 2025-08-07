import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.companies);
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Aziende preferite</h1>
          {favourites.length === 0 ? (
            <p>Nessuna azienda salvata.</p>
          ) : (
            <ul>
              {favourites.map((company) => (
                <li key={company}>
                  <Link to={`/${company}`}>{company}</Link>
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;
