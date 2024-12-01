import { IonHeader, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useDarkMode } from "../hooks/useDarkMode";
import Logo from "../icon/Logo";

export default function Header() {
  const { isDarkMode, handleToggleChange } = useDarkMode();

  return (
    <IonHeader className="ion-header">
      <Logo />
      <IonTitle className="ion-title">Bearhug Management</IonTitle>
      <IonToggle
        checked={isDarkMode}
        onIonChange={handleToggleChange}
      ></IonToggle>
    </IonHeader>
  );
}
