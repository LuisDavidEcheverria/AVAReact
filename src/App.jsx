import React, { useState } from "react";
import Row, { Desc, Carrusel, Incluye } from "./components/Row";
import NavigationBar, { TraducirBoton } from "./components/Navigationbar";
import CarruselPrincipal from "./components/CarruselPrincipal";
import "./App.css";
import Pie from "./components/Pie";
import { motion } from "framer-motion";

export default function MyApp() {
  const titulosCarr = ["Sillas", "Inflables", "Carpas", "Mini-slide"];
  const descsCarr = ["y mesas", "13'x13'", "", ""];
  const imgsCarr = [
    "Carrusel_Sillas.jpeg",
    "Carrusel_Jumpers.jpeg",
    "Carrusel_Carpa.jpeg",
    "Carrusel_Minislide.jpeg",
  ];
  const fotosJumpers = [
    "/Images/Jumpers/Jumper1.jpeg",
    "/Images/Jumpers/Jumper2.jpeg",
  ];
  const fotosMiniSlide = [];
  const fotosHeaters = [];
  const fotosSillas = [];
  const fotosMesas = [];
  const fotosGenerador = [
    "Images/Generadores/Generador1.jpeg",
    "Images/Generadores/Generador2.jpeg",
  ];
  const fotosCarpas = [];
  const [idioma, setIdioma] = useState("spanish");
  const cambiarIdioma = () => {
    setIdioma(idioma === "spanish" ? "english" : "spanish");
  };
  return (
    <>
      <NavigationBar />
      <CarruselPrincipal
        titulos={titulosCarr}
        descripciones={descsCarr}
        imagenes={imgsCarr}
      />

      <h2 className="text-center mt-3">
        Encuentra todo lo que necesitas para tus fiestas y eventos
      </h2>

      <h2 className="text-center mt-5 mb-3">Contamos con:</h2>

      <div className="rowContainer">
        <Row>
          <Desc>
            <h2 className="text-center">
              Inflables <span className="keyWordA">divertidos</span>
            </h2>
            <h3 className="medidas text-center"> {"13'x13'"}</h3>
            <p>
              Añade diversión a tu fiesta con nuestros inflables.¡Los niños los
              adorarán!
            </p>
            <Incluye precio={"$150"}>
              <p>Entregar</p>
              <p>Instalar</p>
              <p>Recoger</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosJumpers}>
            <>
              <h1>Inflable 1</h1>
            </>
            <h1>Inflable 2</h1>
          </Carrusel>
        </Row>

        <Row>
          <Carrusel src={fotosMiniSlide} />
          <Desc>
            <h2 className="text-center">Mini-slide</h2>
            <p>
              Añade un toque de diversión extra a tu evento con nuestros mini
              slides.
            </p>
            <Incluye precio={"$150"}>
              <p>Entregar</p>
              <p>Instalar</p>
              <p>Recoger</p>
            </Incluye>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">Sillas plegables</h2>
            <p>Una opción versátil y práctica para cualquier ocasión.</p>
          </Desc>
          <Carrusel src={fotosSillas} />
        </Row>
        <Row>
          <Carrusel src={fotosMesas} />
          <Desc>
            <h2 className="text-center">Mesas</h2>
            <p>Mesas funcionales que se adaptan a tus necesidades.</p>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">Carpas</h2>
            <p>
              Ideales para cualquier evento al aire libre, sin importar el
              clima.
            </p>
          </Desc>
          <Carrusel src={fotosCarpas} />
        </Row>
        <Row>
          <Carrusel src={fotosHeaters} />
          <Desc>
            <h2 className="text-center">
              Calentadores para <span className="keyWordB">noches frescas</span>
            </h2>
            <p>
              No dejes que el clima arruine tu fiesta. Nuestros calentadores
              mantienen a tus invitados cómodos y cálidos durante toda la noche.
            </p>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">Generador de luz</h2>
            <p>
              Asegúrate que tu evento brille con nuestros generadores de luz.
            </p>
          </Desc>
          <Carrusel src={fotosGenerador}></Carrusel>
        </Row>
      </div>

      <Pie />
      <motion.button
        initial={{ scale: 1 }}
        animate={{
          rotateZ: [0, 5, -5, 0],
          transition: {
            repeat: Infinity,
            repeatDelay: 5,
            duration: 0.4,
          },
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        className="contactButton"
        variant="success"
      >
        Contáctanos
      </motion.button>
    </>
  );
}
