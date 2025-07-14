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
      cadauno: "c/u",
      bienvenida: "Encuentra todo lo que necesitas para tus fiestas y eventos",
      contamos: "Contamos con:",
      inflables: "Inflables <1>Divertidos</1>",
      inflablesDesc:
        " Añade diversión a tu fiesta con nuestros inflables.¡Los niños los adorarán!",
      minislideDesc:
        "Añade un toque de diversión extra a tu evento con nuestros minislides.",
      sillas: "Sillas <1>Plegables</1>",
      sillasDesc: "Una opción versátil y práctica para cualquier ocasión.",
      mesas: "Mesas",
      mesasDesc: "Mesas funcionales que se adaptan a tus necesidades.",
      carpas: "Carpas",
      carpasDesc:
        "Ideales para cualquier evento al aire libre, sin importar el clima.",
      calentadores: "Calentadores para <1>noches frescas</1>",
      calentadoresDesc:
        "No dejes que el clima arruine tu fiesta. Nuestros calentadores mantienen a tus invitados cómodos y cálidos durante toda la noche.",
      generador: "Generador <1>de luz</1>",
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
      sillasResina: "Sillas de <1>Resina</2>",
      sillasResinaDesc:
        "Ideales para eventos elegantes o al aire libre. Resistentes y cómodas.",
      mesaRedonda: "Mesa <1>Redonda</1>",
      mesaRedondaDesc:
        "Perfecta para reuniones familiares o eventos. Robusta y espaciosa.",
      mantelesDelux: "Manteles <1>Delux</1>",
      mantelesDesc:
        "Manteles premium en variedad de colores para mesas rectangulares y redondas.",
      lavadoIncluido: "Lavado incluido",
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
      cadauno: "each",
      bienvenida: "Find everything you need for your parties and events",
      contamos: "We offer:",
      inflables: "<1>Funny</1> Jumpers",
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
      calentadores: "Heaters for <1>cool evenings</1>",
      calentadoresDesc:
        "Don't let the weather ruin your party.Our heaters keep your guests comfortable and warm all nigth long.",
      generador: "Power <1>generator</1>",
      generadorDesc: "Ensure your event shines with our power generators.",
      boton: "Contact Us",
      inflable: "Jumper ",
      incluye: "Includes:",
      entrega: "Delivery",
      instalar: "Setup",
      recoger: "Pickup",
      gas: "Full gas tank",
      gasolina: "Full of gasoline",
      sillasResina: "Resin <1>Chairs</1>",
      sillasResinaDesc:
        "Perfect for elegant or outdoor events. Sturdy and comfortable.",
      mesaRedonda: "Round <1>Table</1>",
      mesaRedondaDesc:
        "Great for family gatherings or formal settings. Spacious and durable.",
      mantelesDelux: "Deluxe <1>Tablecloths</1>",
      mantelesDesc:
        "Premium fabrics available in various colors for round and rectangular tables.",
      lavadoIncluido: "Washing service included",
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
