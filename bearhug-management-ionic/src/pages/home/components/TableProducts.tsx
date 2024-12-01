import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import Header from "../../../core/components/Header";
import { useEffect, useState } from "react";
import { FetchDate, getAllProduct, Product } from "../products/actions";
import { arrowBackCircleOutline, refreshCircleOutline } from "ionicons/icons";

export default function TableProducts() {
  const [data, setData] = useState<FetchDate<Product[]>>();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getAllProduct().then((res) => {
      const result = res as FetchDate<Product[]>;
      setData(result);
    });
  }, [refresh]);

  return (
    <IonPage>
      <Header />
      <IonContent>
        {data?.data.map((item, index) => (
          <IonCard key={index}>
            <IonCardContent>
              <div style={{ display: "grid", textAlign: "center" }}>
                <IonLabel color="primary">Código: {item.code}</IonLabel>
                <IonLabel color="primary">
                  Descripción: {item.description}
                </IonLabel>
                <IonLabel color="primary">Venta por: {item.sale}</IonLabel>
                <IonLabel color="primary">Costo: {item.purchasePrice}</IonLabel>
                <IonLabel color="primary">
                  Precio de venta{item.salesprice}
                </IonLabel>
                <IonLabel color="primary">
                  Precio de mayoreo: {item.mayoreo}
                </IonLabel>
                <IonLabel color="primary">
                  Departamento: {item.category}
                </IonLabel>
                <IonLabel color="primary">Existencia: {item.quantity}</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
      <IonFooter className="ion-footer">
        <IonButton shape="round" routerLink="/home">
          <IonIcon slot="icon-only" icon={arrowBackCircleOutline}></IonIcon>
        </IonButton>
        <IonLabel>Regresar</IonLabel>
        <IonButton onClick={() => setRefresh(!refresh)} shape="round">
          <IonIcon slot="icon-only" icon={refreshCircleOutline}></IonIcon>
        </IonButton>
      </IonFooter>
    </IonPage>
  );
}
