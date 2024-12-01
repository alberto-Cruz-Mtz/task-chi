import {
  IonButton,
  IonIcon,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { FormEvent, useState } from "react";
import { addProduct, FetchDate, Product } from "../products/actions";
import Modal from "../../../core/components/Modal";
import { alertCircleOutline } from "ionicons/icons";

const category = [
  "detergente",
  "licores",
  "sabritas",
  "barcel",
  "higiene",
  "refrescos",
  "medicamentos",
];

export default function FormAdd() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<FetchDate<string> | null>(null);

  const dismiss = () => setIsOpen(!isOpen);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product: Product = recoverElement(e.currentTarget);
    console.log(product);
    addProduct(product).then((res) => {
      const result = res as FetchDate<string>;
      setData(result);
      setIsOpen(!isOpen);
    });
  };

  const recoverElement = (event: EventTarget & HTMLFormElement) => {
    const code = event.code.value;
    const description = event.description.value;
    const sale = event.venta.value;
    const purchasePrice = Number(event.purchasePrice.value);
    const salesprice = Number(event.salesprice.value);
    const mayoreo = Number(event.mayoreo.value);
    const category = event.category.value;
    const quantity = Number(event.quantity.value);
    return {
      code,
      description,
      sale,
      purchasePrice,
      salesprice,
      mayoreo,
      category,
      quantity,
    };
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
      <IonInput
        name="description"
        required
        type="text"
        labelPlacement="stacked"
        fill="solid"
        label="Descripción"
      ></IonInput>
      <IonRadioGroup name="venta" value="unidad" className="ion-radio-box">
        <IonRadio value="unidad">Por unidad/pieza</IonRadio>
        <IonRadio value="a granel">A granel</IonRadio>
        <IonRadio value="kit">Como paquete (kit)</IonRadio>
      </IonRadioGroup>
      <IonInput
        name="purchasePrice"
        required
        type="number"
        labelPlacement="stacked"
        fill="solid"
        label="Precio de compra"
      ></IonInput>
      <IonInput
        name="salesprice"
        required
        type="number"
        labelPlacement="stacked"
        fill="solid"
        label="Precio de venta"
      ></IonInput>
      <IonInput
        name="mayoreo"
        required
        type="number"
        labelPlacement="stacked"
        fill="solid"
        label="Precio de mayoreo (optional)"
        value="0"
      ></IonInput>
      <IonSelect
        fill="solid"
        value="apples"
        name="category"
        placeholder="Select fruit"
      >
        <IonSelectOption value="apples">Detergentes</IonSelectOption>
        {category.map((item, index) => (
          <IonSelectOption key={index} value={item}>
            {item}
          </IonSelectOption>
        ))}
      </IonSelect>
      <IonInput
        name="quantity"
        required
        type="number"
        labelPlacement="stacked"
        fill="solid"
        label="existencia"
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
        <p>{data?.message}</p>
      </Modal>
    </form>
  );
}
