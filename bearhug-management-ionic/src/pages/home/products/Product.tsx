import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import Form from "../components/Form";
import Header from "../../../core/components/Header";
import "./Product.css";
import { arrowBackCircleOutline } from "ionicons/icons";
import FormUpdate from "../components/FormUpdate";
import { JSX } from "react";

interface Props {
  title: string;
  form: JSX.Element;
}

export default function Product({ title, form }: Props) {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <h1>{title}</h1>
        {form}
      </IonContent>
      <IonFooter className="ion-footer">
        <IonButton shape="round" routerLink="/home">
          <IonIcon slot="icon-only" icon={arrowBackCircleOutline}></IonIcon>
        </IonButton>
        <IonLabel color="light">Regresar</IonLabel>
      </IonFooter>
    </IonPage>
  );
}
