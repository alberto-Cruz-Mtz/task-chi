import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { FormEvent, useRef, useState } from "react";
import { close } from "ionicons/icons";
import Modal from "../../../core/components/Modal";

interface Props {
  textButton: string;
  action: (username: string, password: string) => Promise<unknown>;
}

export default function FormAuth({ textButton, action }: Props) {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const modal = useRef<HTMLIonModalElement>(null);

  const dismiss = () => setIsOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    console.log({ username, password });
    action(username, password).then((result) => {
      console.log(result);
      setMessage(result.message);
      setRedirect(result.status);
      setIsOpen(!isOpen);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-auth">
      <IonInput
        fill="solid"
        type="email"
        labelPlacement="floating"
        value="paco@example.com"
        name="username"
        required
      >
        <div slot="label">
          Email <IonText color="danger">(Required)</IonText>
        </div>
      </IonInput>
      <IonInput
        fill="solid"
        type="password"
        labelPlacement="floating"
        required
        name="password"
      >
        <div slot="label">
          Password <IonText color="danger">(Required)</IonText>
        </div>
      </IonInput>
      <IonButton type="submit" shape="round">
        {textButton}
      </IonButton>

      <Modal dismiss={dismiss} isOpen={isOpen}>
        <IonLabel>{message}</IonLabel>
        <br />
        {redirect && <IonButton routerLink="/home">ir a home</IonButton>}
      </Modal>
    </form>
  );
}
