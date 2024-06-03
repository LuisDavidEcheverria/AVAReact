import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";

function CarruselPrincipal(props) {
  const imagenes = [];
  for (let i = 0; i < props.imagenes.length; i++) {
    imagenes.push(props.imagenes[i]);
  }
  const titulos = [];
  for (let i = 0; i < props.titulos.length; i++) {
    titulos.push(props.titulos[i]);
  }
  const descripciones = [];
  for (let i = 0; i < props.descripciones.length; i++) {
    descripciones.push(props.descripciones[i]);
  }
  return (
    <Carousel fade>
      {imagenes.map((ruta, index) => (
        <Carousel.Item key={titulos[index]}>
          <img
            src={"/Images/" + ruta}
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
  titulos: PropTypes.array.isRequired,
  descripciones: PropTypes.array.isRequired,
  imagenes: PropTypes.array.isRequired,
};
export default CarruselPrincipal;
