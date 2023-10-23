import { useEffect, useState } from "react";
import "../styles/darklightswitch.css";

export default function DarkLightSwitch({ lightModeLabel, darkModeLabel }) {
  const darkTheme = {
    "--bg-color": "#0d1321",
    "--text-color": "white",
    "--link-color": "white",
  };

  const lightTheme = {
    "--bg-color": "white",
    "--text-color": "black",
    "--link-color": "blue",
  };

  const isDarkModeEnabled = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkModeEnabled, setDarkModeEnabled] = useState(isDarkModeEnabled);

  // Executed every page reload
  useEffect(() => {
    const darkModeListener = (e) => {
      if (e.matches) {
        setDarkModeEnabled(true);
      } else {
        setDarkModeEnabled(false);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", darkModeListener);

    return () => mediaQuery.removeEventListener("change", darkModeListener);
  }, []);

  function toggleTheme(isDarkMode) {
    const theme = isDarkMode ? darkTheme : lightTheme;
    const root = document.documentElement;

    for (const [variable, value] of Object.entries(theme)) {
      root.style.setProperty(variable, value);
    }

    setDarkModeEnabled(isDarkMode);
  }

  function handleThemeChange(e) {
    const isDarkMode = e.target.value === "dark";
    toggleTheme(isDarkMode);
  }

  return (
    <select
      value={darkModeEnabled ? "dark" : "light"}
      onChange={handleThemeChange}
    >
      <option value="dark">{darkModeLabel}</option>
      <option value="light">{lightModeLabel}</option>
    </select>
  );
}
