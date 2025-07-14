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
    "Carrusel_Carpa.webp",
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
  const fotosGenerador = ["/Images/Generadores/Generador1.jpeg"];
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
      <img
        src="/Images/confi.gif"
        alt="Fiesta animada"
        className="d-block mx-auto my-3 w-25 rounded"
      />
      <h2 className="text-center mt-5 mb-3">{t("contamos")}</h2>

      <div className="rowContainer">
        <Row>
          <Desc>
            <h2 className="text-center">
              <Trans
                i18nKey="inflables"
                components={{ 1: <span className="keyWordA" /> }}
              />
            </h2>
            <h3 className="medidas text-center"> {"13'x13'"}</h3>
            <p>{t("inflablesDesc")}</p>
            <Incluye>
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosJumpers} precio={"$120"}>
            <>
              <h1>{t("inflable") + "1"}</h1>
            </>
            <h1>{t("inflable") + "2"}</h1>
          </Carrusel>
        </Row>

        <Row>
          <Carrusel src={fotosMiniSlide} precio={"$160"} />
          <Desc>
            <h2 className="text-center">Mini-slide</h2>
            <h3 className="medidas text-center"> {"13'x21'"}</h3>
            <p>{t("minislideDesc")}</p>
            <Incluye inclinacion="right">
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">
              <Trans
                i18nKey="sillas"
                components={{ 1: <span className="keyWordA" /> }}
              />
            </h2>
            <p>{t("sillasDesc")}</p>
            <Incluye>
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosSillas} precio={"$1.5 c/u"} />
        </Row>
        <Row>
          <Carrusel src={fotosMesas} precio={"$7.0 c/u"} />
          <Desc>
            <h2 className="text-center">{t("mesas")}</h2>
            <p>{t("mesasDesc")}</p>
            <Incluye inclinacion="right">
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
            <Incluye>
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosCarpas} precio={"$200/$250"} />
        </Row>
        <Row>
          <Carrusel src={fotosHeaters} precio={"$60"} />
          <Desc>
            <h2 className="text-center">
              <Trans
                i18nKey="calentadores"
                components={{ 1: <span className="keyWordB" /> }}
              />
            </h2>
            <p>{t("calentadoresDesc")}</p>
            <Incluye inclinacion="right">
              <p>{t("entrega")}</p>
              <p>{t("instalar")}</p>
              <p>{t("recoger")}</p>
              <p>{t("gas")}</p>
            </Incluye>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">
              <Trans
                i18nKey="generador"
                components={{ 1: <span className="keyWordA" /> }}
              />
            </h2>
            <p>{t("generadorDesc")}</p>
            <Incluye>
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
              <p>{t("gasolina")}</p>
            </Incluye>
          </Desc>
          <Carrusel src={fotosGenerador} precio={"$50"} />
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">
              <Trans
                i18nKey="sillasResina"
                components={{ 1: <span className="keyWordA" /> }}
              />
            </h2>
            <p>{t("sillasResinaDesc")}</p>
            <Incluye>
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel
            src={[
              "/Images/SillasResina/SillaResina.jpeg",
              "/Images/SillasResina/SillaResina2.jpeg",
            ]}
            precio={"$3 " + t("cadauno")}
          />
        </Row>
        <Row>
          <Carrusel
            src={[
              "/Images/MesasRedondas/Mesa3.jpeg",
              "/Images/MesasRedondas/Mesa4.jpeg",
            ]}
            precio={"$10 " + t("cadauno")}
          />
          <Desc>
            <h2 className="text-center">
              <Trans
                i18nKey="mesaRedonda"
                components={{ 1: <span className="keyWordB" /> }}
              />
            </h2>
            <h3 className="medidas text-center"> {"60”"}</h3>
            <p>{t("mesaRedondaDesc")}</p>
            <Incluye inclinacion="right">
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
        </Row>
        <Row>
          <Desc>
            <h2 className="text-center">
              <Trans
                i18nKey="mantelesDelux"
                components={{ 1: <span className="keyWordA" /> }}
              />
            </h2>
            <p>{t("mantelesDesc")}</p>
            <Incluye>
              <p>{t("entrega")}</p>
              <p>{t("recoger")}</p>
            </Incluye>
          </Desc>
          <Carrusel
            src={["/Images/Manteles/Mantel.jpeg"]}
            precio={"$10 " + t("cadauno")}
          />
        </Row>
      </div>

      <Pie />
      <a
        href="https://wa.me/17073269286"
        target="_blank"
        rel="noopener noreferrer"
      >
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
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          className="contactButton"
        >
          <Container>
            <img src="/Icons/whatsapp (2).png" alt="WhatsApp" width="24" />
            {t("boton")}
          </Container>
        </motion.button>
      </a>
    </>
  );
}
