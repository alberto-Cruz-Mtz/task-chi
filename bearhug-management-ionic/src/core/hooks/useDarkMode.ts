import { useEffect, useState } from "react";
import type { ToggleCustomEvent } from "@ionic/react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (shouldEnable: boolean) => {
    document.documentElement.classList.toggle("ion-palette-dark", shouldEnable);
    localStorage.setItem("darkMode", JSON.stringify(shouldEnable));
  };

  const handleToggleChange = (event: ToggleCustomEvent) => {
    const isChecked = event.detail.checked;
    setIsDarkMode(isChecked);
    toggleDarkMode(isChecked);
  };

  useEffect(() => {
    // Verifica si hay un valor guardado en localStorage
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      const isDark = JSON.parse(savedTheme);
      setIsDarkMode(isDark);
      toggleDarkMode(isDark);
    } else {
      // Si no hay valor guardado, usa la preferencia del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

      const initializeDarkMode = (isDark: boolean) => {
        setIsDarkMode(isDark);
        toggleDarkMode(isDark);
      };

      initializeDarkMode(prefersDark.matches);

      const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        initializeDarkMode(e.matches);
      };

      prefersDark.addEventListener("change", handleMediaQueryChange);

      return () => {
        prefersDark.removeEventListener("change", handleMediaQueryChange);
      };
    }
  }, []);

  return { isDarkMode, handleToggleChange };
}
