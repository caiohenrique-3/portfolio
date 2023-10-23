import "../styles/skills.css";

export default function Skills({ language }) {
  const translations = {
    en: {
      heading: "Skills",
    },
    "pt-BR": {
      heading: "Habilidades",
    },
  };

  const { heading } = translations[language];

  return (
    <>
      <section id="skills">
        <h2>{heading}</h2>
        <ul className="column">
          <li>
            <img src="./html.svg" aria-hidden="true" />HTML
          </li>
          <li id="css-logo">
            <img src="./css.png" aria-hidden="true" />CSS
          </li>
          <li>
            <img src="./javascript.svg" aria-hidden="true" />JavaScript
          </li>
          <li>
            <img src="./react.svg" aria-hidden="true" />React
          </li>
          <li>
            <img src="./git.svg" aria-hidden="true" />Git
          </li>
          <li>
            <img src="./github-white.svg" aria-hidden="true" />GitHub
          </li>
        </ul>
      </section>
    </>
  );
}
