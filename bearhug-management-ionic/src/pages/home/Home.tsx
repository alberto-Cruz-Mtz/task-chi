import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import Header from "../../core/components/Header";
import { arrowBackCircleOutline } from "ionicons/icons";
import "./Home.css";

export default function Home() {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonButtons class="ion-buttons">
          <IonButton
            routerLink="/home/product/search"
            color="primary"
            shape="round"
          >
            buscar producto
          </IonButton>
          <IonButton
            routerLink="/home/product/all"
            color="primary"
            shape="round"
          >
            ver todos los productos
          </IonButton>
         <IonButton
            routerLink="/home/product/add"
            color="primary"
            shape="round"
          >
            agregar producto
          </IonButton>
          <IonButton
            routerLink="/home/product/delete"
            color="primary"
            shape="round"
          >
            eliminar producto
          </IonButton>
          <IonButton
            routerLink="/home/product/update"
            color="primary"
            shape="round"
          >
            actualizar producto
          </IonButton>
        </IonButtons>
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
