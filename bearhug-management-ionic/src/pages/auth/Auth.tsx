import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import Header from "../../core/components/Header";
import FormAuth from "./components/FormAuth";
import "./Auth.css";
import { arrowBackCircleOutline } from "ionicons/icons";

export default function Auth({
  title,
  action,
}: {
  title: string;
  action: (username: string, password: string) => Promise<unknown>;
}) {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <h1>{title}</h1>
        <FormAuth action={action} textButton="iniciar sesion" />
      </IonContent>
      <IonFooter className="ion-footer">
        <IonButton shape="round" routerLink="/">
          <IonIcon slot="icon-only" icon={arrowBackCircleOutline}></IonIcon>
        </IonButton>
        <IonLabel>Regresar</IonLabel>
      </IonFooter>
    </IonPage>
  );
}
