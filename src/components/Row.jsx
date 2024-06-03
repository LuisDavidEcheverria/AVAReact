import { Children, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { motion, useAnimation, useInView } from "framer-motion";

function Row(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 80,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
      className="carta"
      ref={ref}
    >
      <div className="row ">{props.children}</div>
    </motion.div>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Desc(props) {
  return <div className="col-md-6 ">{props.children}</div>;
}

Desc.propTypes = {
  children: PropTypes.node,
};

export function Carrusel(props) {
  const rutas = [];
  for (let i = 0; i < props.src.length; i++) {
    rutas.push(props.src[i]);
  }
  const captions = Children.toArray(props.children);
  return (
    <div className="col-md-6">
      <Carousel>
        {rutas.map((ruta, index) => (
          <Carousel.Item key={index}>
            <img src={ruta} className=" miniCarrusel-img" draggable="false" />
            <Carousel.Caption>{captions[index] || ""}</Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
Carrusel.propTypes = {
  src: PropTypes.array.isRequired,
  children: PropTypes.node,
};
export function Incluye(props) {
  const lista = Children.toArray(props.children);
  return (
    <div className="row">
      <div className="col-5">
        <h3 className="text-center precio">{props.precio}</h3>
      </div>
      <div className="col-7">
        <div className="postit">
          <h5 className="text-center">Incluye:</h5>
          <ul>
            {lista.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
Incluye.propTypes = {
  children: PropTypes.node.isRequired,
  precio: PropTypes.string.isRequired,
};
export default Row;
