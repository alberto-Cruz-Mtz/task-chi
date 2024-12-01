import { IonButton, IonIcon, IonInput, IonLabel } from "@ionic/react";
import { FormEvent, useState } from "react";
import Modal from "../../../core/components/Modal";
import { deleteProduct, FetchDate } from "../products/actions";
import { checkmarkDoneCircleOutline } from "ionicons/icons";

export default function FormDelete() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<FetchDate<string> | null>(null);

  const dismiss = () => setIsOpen(!isOpen);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = e.currentTarget.code.value;
    deleteProduct(code).then((res) => {
      const result = res as FetchDate<string>;
      console.log(result);
      setData(result);
      setIsOpen(!isOpen);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ion-form">
      <IonInput
        name="code"
        required
        class="custom"
        type="text"
        labelPlacement="stacked"
        fill="solid"
        label="Código"
      ></IonInput>
      <IonButton type="submit" shape="round" color="primary">
        agregar
      </IonButton>
      <Modal
        isCorrect={data?.status}
        isAlert={!data?.status}
        dismiss={dismiss}
        isOpen={isOpen}
      >
        <IonLabel>{data?.message}</IonLabel>
      </Modal>
    </form>
  );
}
