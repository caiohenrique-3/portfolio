import "../styles/languageswitcher.css";

export default function LanguageSwitcher({ changeLanguage }) {
  return (
    <div id="language-switcher">
      <select
        id="language-switch-button"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="pt-BR">Português Brasileiro</option>
      </select>
    </div>
  );
}
