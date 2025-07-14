import { Children, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

function Row(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
      className="carta"
      ref={ref}
    >
      <div className="row">{props.children}</div>
    </motion.div>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Desc(props) {
  return <div className="col-md-6">{props.children}</div>;
}

Desc.propTypes = {
  children: PropTypes.node,
};

export function Carrusel(props) {
  const { src, precio, children } = props;
  const captions = Children.toArray(children);

  return (
    <div className="col-md-6">
      <div className="carousel-container">
        {src.length > 1 ? (
          <Carousel>
            {src.map((ruta, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={ruta}
                  className="miniCarrusel-img"
                  draggable="false"
                  alt={`slide-${idx}`}
                />
                <Carousel.Caption>{captions[idx] || null}</Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div className="single-image-container text-center">
            <img
              src={src[0]}
              className="miniCarrusel-img"
              draggable="false"
              alt="single-slide"
            />
            {captions[0] && (
              <div className="carousel-caption">{captions[0]}</div>
            )}
          </div>
        )}
        <div className="text-center precio mt-3">
          <h3>{precio}</h3>
        </div>
      </div>
    </div>
  );
}

Carrusel.propTypes = {
  src: PropTypes.arrayOf(PropTypes.string).isRequired,
  precio: PropTypes.string,
  children: PropTypes.node,
};

export function Incluye(props) {
  const lista = Children.toArray(props.children);
  const { t } = useTranslation();
  const tilt = props.inclinacion || "left";

  return (
    <div className="row w-50">
      <div className={`postit ${tilt}`}>
        <h5 className="text-center">{t("incluye")}</h5>
        <ul>
          {lista.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Incluye.propTypes = {
  children: PropTypes.node.isRequired,
  inclinacion: PropTypes.string,
};

export default Row;
