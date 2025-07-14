import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";

function CarruselPrincipal({ imagenes, titulos, descripciones }) {
  return (
    <Carousel fade>
      {imagenes.map((ruta, index) => (
        <Carousel.Item key={index}>
          <img
            src={`/Images/${ruta}`}
            alt={titulos[index] || `slide-${index}`}
            className="d-block w-100 carousel-img"
            draggable="false"
          />
          <Carousel.Caption>
            <h1>{titulos[index]}</h1>
            <h3>{descripciones[index]}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

CarruselPrincipal.propTypes = {
  titulos: PropTypes.arrayOf(PropTypes.string).isRequired,
  descripciones: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CarruselPrincipal;
