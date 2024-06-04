import Row, { Desc, Carrusel, Incluye } from "./components/Row";
import NavigationBar from "./components/Navigationbar";
import CarruselPrincipal from "./components/CarruselPrincipal";
import "./App.css";
import Pie from "./components/Pie";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Container } from "react-bootstrap";
export default function MyApp() {
  //const titulosCarr = ["Sillas", "Inflables", "Carpas", "Mini-slide"];

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
  const fotosMiniSlide = ["/Images/MiniSlides/minislide1.jpeg"];
  const fotosHeaters = [
    "/Images/Heaters/heater1.jpeg",
    "/Images/Heaters/heater2.jpeg",
  ];
  const fotosSillas = [
    "/Images/Sillas/sillas1.jpeg",
    "/Images/Sillas/sillas2.jpeg",
    "/Images/Sillas/sillas3.jpeg",
  ];
  const fotosMesas = ["/Images/Mesas/mesa1.jpeg"];
  const fotosGenerador = [
    "/Images/Generadores/Generador1.jpeg",
    "/Images/Generadores/Generador2.jpeg",
  ];
  const fotosCarpas = [
    "/Images/Carpas/carpa1.jpeg",
    "/Images/Carpas/carpa2.jpeg",
  ];
  //Traduccion
  const { t } = useTranslation();
  const titulosCarr = Object.values(t("titulosCarrusel"));
  const descsCarr = Object.values(t("descripcionesCarrusel"));
  return (
    <>
      <NavigationBar />
      <CarruselPrincipal
        titulos={titulosCarr}
        descripciones={descsCarr}
        imagenes={imgsCarr}
      />

      <h2 className="text-center mt-3">{t("bienvenida")}</h2>

      <h2 className="text-center mt-5 mb-3">{t("contamos")}</h2>

      <div className="rowContainer">
        <Row>
          <Desc>
            <h2 className="text-center">
              <Trans i18nKey="inflabLes">
                Inflables <span className="keyWordA"> divertidos</span>
              </Trans>
            </h2>
            <h3 className="medidas text-center"> {"13'x13'"}</h3>
            <p>{t("inflablesDesc")}</p>
            <Incluye precio={"$120"}>
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosJumpers}>
            <>
              <h1>{t("inflable") + "1"}</h1>
            </>
            <h1>{t("inflable") + "2"}</h1>
          </Carrusel>
        </Row>

        <Row>
          <Carrusel src={fotosMiniSlide} />
          <Desc>
            <h2 className="text-center">Mini-slide</h2>
            <h3 className="medidas text-center"> {"13'x21'"}</h3>
            <p>{t("minislideDesc")}</p>
            <Incluye precio={"$160"} inclinacion="right">
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">{t("sillas")}</h2>
            <p>{t("sillasDesc")}</p>
            <Incluye precio={"$1.5 c/u"}>
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosSillas} />
        </Row>
        <Row>
          <Carrusel src={fotosMesas} />
          <Desc>
            <h2 className="text-center">{t("mesas")}</h2>
            <p>{t("mesasDesc")}</p>
            <Incluye precio={"$7.0 c/u"} inclinacion="right">
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">{t("carpas")}</h2>
            <h5 className="medidas text-center"> {"20'x20' / 20'x30'"}</h5>

            <p>{t("carpasDesc")}</p>
            <Incluye precio={"$200  $250"}>
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosCarpas} />
        </Row>
        <Row>
          <Carrusel src={fotosHeaters} />
          <Desc>
            <h2 className="text-center">
              <Trans i18nKey="calentadores">
                Calentadores para
                <span className="keyWordB">noches frescas</span>
              </Trans>
            </h2>
            <p>{t("calentadoresDesc")}</p>
            <Incluye precio={"$60"} inclinacion="right">
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
              <p>{t("gas")}</p>
            </Incluye>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">{t("generador")}</h2>
            <p>{t("generadorDesc")}</p>
            <Incluye precio={"$50"}>
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
              <p>{t("gasolina")}</p>
            </Incluye>
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
        <Container>
          <img src="./public/Icons/whatsapp (2).png"></img>
          {t("boton")}
        </Container>
      </motion.button>
    </>
  );
}
