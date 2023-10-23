import "../styles/contact.css";

export default function Contact({ language }) {
  const translations = {
    en: {
      heading: "Contact Me",
      phoneLabel: "Phone",
      phoneNumber: "+51 (21) 99350-2805",
      linkedinLabel: "LinkedIn Profile",
      githubLabel: "GitHub Profile",
    },
    "pt-BR": {
      heading: "Contato",
      phoneLabel: "Telefone",
      phoneNumber: "(21) 99350-2805",
      linkedinLabel: "Perfil no LinkedIn",
      githubLabel: "Perfil no GitHub",
    },
  };

  const { heading, phoneLabel, phoneNumber, linkedinLabel, githubLabel } =
    translations[language];
  return (
    <>
      <section id="contact">
        <h2>{heading}</h2>
        <ul>
          <li>Email: caiohenrique29@protonmail.com</li>
          <li>{phoneLabel}: {phoneNumber}</li>
          <li>
            <a href="https://www.linkedin.com/in/caio-henrique-c7351/">
              <i className="fa fa-external-link" aria-hidden="true"></i>
              {linkedinLabel}
            </a>
          </li>
          <li>
            <a href="https://github.com/caiohenrique-3">
              <i className="fa fa-external-link" aria-hidden="true"></i>
              {githubLabel}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
