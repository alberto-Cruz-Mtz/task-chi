import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonModal,
  IonToolbar,
} from "@ionic/react";
import {
  alertCircleOutline,
  checkmarkDoneCircleOutline,
  close,
} from "ionicons/icons";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  isAlert?: boolean;
  isCorrect?: boolean;
  dismiss: () => void;
  children: ReactNode;
}

export default function Modal({
  children,
  dismiss,
  isOpen,
  isAlert,
  isCorrect,
}: Props) {
  return (
    <IonModal id="example-modal" isOpen={isOpen}>
      <IonToolbar>
        <IonButtons slot="end">
          <IonButton color="light" onClick={() => dismiss()}>
            <IonIcon icon={close}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent id="ion-modal">
        <br />
        {isAlert && (
          <IonIcon
            color="danger"
            size="large"
            icon={alertCircleOutline}
          ></IonIcon>
        )}
        {isCorrect && (
          <IonIcon
            color="success"
            size="large"
            icon={checkmarkDoneCircleOutline}
          ></IonIcon>
        )}
        <br />
        {children}
      </IonContent>
    </IonModal>
  );
}
