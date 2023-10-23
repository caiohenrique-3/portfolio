import "../styles/about.css";

export default function About({ language }) {
  const translations = {
    en: {
      heading: "About me",
      description1:
        "I'm Caio Henrique, a frontend developer who finds beauty in simplicity. Much like my preference for Linux, I value systems that offer users freedom and follow a minimalist philosophy. When it comes to my websites, I prioritize accessibility and steer clear of unnecessary elements. My aim is to contribute to a cleaner, more user-friendly internet experience.",
      cvLink: "portfolio/test.pdf",
      cvDownloadLabel: "Download CV",
    },
    "pt-BR": {
      heading: "Sobre mim",
      description1:
        "Sou Caio Henrique, um desenvolvedor front-end que encontra beleza na simplicidade. Assim como minha preferência pelo Linux, valorizo sistemas que oferecem liberdade aos usuários e seguem uma filosofia minimalista. Quando se trata de meus sites, priorizo a acessibilidade e evito elementos desnecessários. Meu objetivo é contribuir para uma experiênciade Internet mais limpa e fácil de usar.",
      cvLink: "portfolio/testPtBR.pdf",
      cvDownloadLabel: "Download currículo",
    },
  };

  const { heading, description1, cvLink, cvDownloadLabel } =
    translations[language];

  return (
    <section id="about">
      <h2>{heading}</h2>
      <p>{description1}</p>
      <a href={cvLink} download>
        <button id="download-cv">
          <i className="fa fa-download"></i>
          {cvDownloadLabel}
        </button>
      </a>
    </section>
  );
}
