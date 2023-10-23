import "../styles/introduction.css";

export default function Introduction({ language }) {
  const translations = {
    en: {
      heading: "Welcome to my portfolio!",
      description1:
        "Here, you'll find a quick overview of all my frontend projects and ways to get in touch with me.",
      description2: "Feel free to explore and check out some of my work!",
    },
    "pt-BR": {
      heading: "Bem vindo ao meu portfólio!",
      description1:
        "Aqui, você encontrará uma visão geral rápida de todos os meus projetos de front-end e maneiras de entrar em contato comigo.",
      description2:
        "Sinta-se à vontade para explorar e conferir alguns de meus trabalhos!",
    },
  };

  const { heading, description1, description2 } = translations[language];

  return (
    <section id="introduction">
      <h1>{heading}</h1>
      <p>{description1}</p>
      <p>{description2}</p>
    </section>
  );
}
