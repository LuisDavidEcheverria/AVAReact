import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
function NavigationBar() {
  const [clicked, setClicked] = useState(false);
  const { i18n } = useTranslation();
  const handleClick = () => {
    const idioma = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(idioma);
    setClicked(!clicked);
  };

  return (
    <>
      <Navbar className="brandRow " data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./public/Icons/castillo-inflable (1).png"
              width="64"
              height="64"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div>
            <h5 className="text-center">AVA </h5>
            <p className="text-center">Jumpers and Party Rentals</p>
          </div>
          <motion.button
            className="translateButton"
            onClick={handleClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img
              src={
                clicked
                  ? "./public/Icons/english.png"
                  : "./public/Icons/spanish.png"
              }
              width="32"
              height="32"
            ></img>
          </motion.button>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationBar;
