// components
import DarkLightSwitch from "./DarkLightSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

// css
import "../styles/header.css";

export default function Header({ language, changeLanguage }) {
  const translations = {
    en: {
      link1Label: "About",
      link2Label: "Projects",
      link3Label: "Skills",
      link4Label: "Contact",
      lightModeLabel: "Light",
      darkModeLabel: "Dark",
    },
    "pt-BR": {
      link1Label: "Sobre",
      link2Label: "Projetos",
      link3Label: "Habilidades",
      link4Label: "Contato",
      lightModeLabel: "Claro",
      darkModeLabel: "Escuro",
    },
  };

  const {
    link1Label,
    link2Label,
    link3Label,
    link4Label,
    lightModeLabel,
    darkModeLabel,
  } = translations[language];

  return (
    <header>
      <div className="link-container">
        <nav>
          <ul>
            <li>
              <a href="#about">{link1Label}</a>
            </li>
            <li>
              <a href="#projects">{link2Label}</a>
            </li>
            <li>
              <a href="#skills">{link3Label}</a>
            </li>
            <li>
              <a href="#contact">{link4Label}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="button-container">
        <DarkLightSwitch
          lightModeLabel={lightModeLabel}
          darkModeLabel={darkModeLabel}
        />
      </div>
      <LanguageSwitcher changeLanguage={changeLanguage} />
    </header>
  );
}
