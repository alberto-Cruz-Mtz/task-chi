import {
  IonButton,
  IonInput,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { FormEvent, useState } from "react";
import Modal from "../../../core/components/Modal";
import { FetchDate, getProduct, Product } from "../products/actions";
import { grid } from "ionicons/icons";

const category = [
  "detergente",
  "licores",
  "sabritas",
  "barcel",
  "higiene",
  "refrescos",
  "medicamentos",
];

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<FetchDate<Product> | null>(null);

  const dismiss = () => setIsOpen(!isOpen);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = e.currentTarget.code.value;
    getProduct(code).then((res) => {
      const result = res as FetchDate<Product>;
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
        <div style={{ display: "grid" }}>
          {data?.status && (
            <>
              <IonLabel color="primary">
                descripcion: {data?.data.description}
              </IonLabel>
              <IonLabel color="primary">venta por: {data?.data.sale}</IonLabel>
              <IonLabel color="primary">
                costo: {data?.data.purchasePrice}
              </IonLabel>
              <IonLabel color="primary">
                precio: {data?.data.salesprice}
              </IonLabel>
              <IonLabel color="primary">
                departamento: {data?.data.category}
              </IonLabel>
              <IonLabel color="primary">
                existencia: {data?.data.quantity}
              </IonLabel>
            </>
          )}
        </div>
      </Modal>
    </form>
  );
}
