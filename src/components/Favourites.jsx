import { Col, Container, Row } from "react-bootstrap";
import Company from "./Company";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector(state => state.favourites.content);
  return (
    <Container>
      <Row>
        <Col>
          {favourites.map((company, index) => (
            <Company key={index} company={company} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
