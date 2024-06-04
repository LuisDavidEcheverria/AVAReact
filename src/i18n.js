import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      titulosCarrusel: {
        Sillas: "Sillas",
        Inflables: "Inflables",
        Carpas: "Carpas",
        MiniSlide: "Mini-slide",
      },
      descripcionesCarrusel: {
        Sillas: "y mesas",
        Inflables: "13'x13'",
        Carpas: "",
        MiniSlide: "",
      },
      bienvenida: "Encuentra todo lo que necesitas para tus fiestas y eventos",
      contamos: "Contamos con:",
      inflables: "Inflables <span className= 'keyWordA'> divertidos</span>",
      inflablesDesc:
        " Añade diversión a tu fiesta con nuestros inflables.¡Los niños los adorarán!",
      minislideDesc:
        "Añade un toque de diversión extra a tu evento con nuestros minislides.",
      sillas: "Sillas plegables",
      sillasDesc: "Una opción versátil y práctica para cualquier ocasión.",
      mesas: "Mesas",
      mesasDesc: "Mesas funcionales que se adaptan a tus necesidades.",
      carpas: "Carpas",
      carpasDesc:
        "Ideales para cualquier evento al aire libre, sin importar el clima.",
      calentadores:
        "Calentadores para <span className='keyWordB'>noches frescas</span>",
      calentadoresDesc:
        "No dejes que el clima arruine tu fiesta. Nuestros calentadores mantienen a tus invitados cómodos y cálidos durante toda la noche.",
      generador: "Generador de luz",
      generadorDesc:
        "Asegúrate que tu evento brille con nuestros generadores de luz.",
      boton: "Contáctanos",
      inflable: "Inflable ",
      incluye: "Incluye:",
      entrega: "Entregar",
      instalar: "Instalar",
      recoger: "Recoger",
      gas: "Tanque de gas lleno",
      gasolina: "Lleno de gasolina",
    },
  },
  en: {
    translation: {
      titulosCarrusel: {
        Sillas: "Chairs",
        Inflables: "Jumpers",
        Carpas: "Tents",
        MiniSlide: "Mini-slide",
      },
      descripcionesCarrusel: {
        Sillas: "and tables",
        Inflables: "13'x13'",
        Carpas: "",
        MiniSlide: "",
      },
      bienvenida: "Find everything you need for your parties and events",
      contamos: "We offer:",
      inflables: "<span className= 'keyWordA'>Funny</span> Jumpers",
      inflablesDesc:
        " Add fun to your party with our jumpers, the kids will love it!",
      minislideDesc:
        "Add an extra touch of fun to your event with our mini-slides.",
      sillas: "Folding chairs",
      sillasDesc: "A versatile and practical option for any occasion.",
      mesas: "Tables",
      mesasDesc: "Functional tables that adapt to your needs.",
      carpas: "Tents",
      carpasDesc: "Ideal for any outdoor event,no matter the weather.",
      calentadores:
        "Heaters for<span className='keyWordB'>cool evenings</span>",
      calentadoresDesc:
        "Don't let the weather ruin your party.Our heaters keep your guests comfortable and warm all nigth long.",
      generador: "Power generator",
      generadorDesc: "Ensure your event shines with our power generators.",
      boton: "Contact Us",
      inflable: "Jumper ",
      incluye: "Includes:",
      entrega: "Delivery",
      instalar: "Setup",
      recoger: "Pickup",
      gas: "Full gas tank",
      gasolina: "Full of gasoline",
    },
  },
};

i18n.use(initReactI18next).init({
  returnObjects: true,
  fallbackLng: "es",
  resources,

  lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
