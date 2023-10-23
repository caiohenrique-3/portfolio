import { useEffect, useState } from "react";

export default function useTranslation() {
  const [language, setLanguage] = useState("en-US");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    console.log(`Selected Lang: ${language}`);
    import(`../translations/${language}.json`).then((module) => {
      console.log(module.default);
      setTranslations(module.default);
    });
  }, [language]);

  const t = (key) => {
    return translations[key] || key;
  };

  return { t, setLanguage, language };
}
