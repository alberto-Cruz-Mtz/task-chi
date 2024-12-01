import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonItem,
  IonList,
} from "@ionic/react";
import CheckIcon from "../icon/CheckIcon";

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({
  title,
  price,
  features,
  isPopular,
}: PricingCardProps) {
  return (
    <IonCard className="card-pricing">
      {isPopular && <span className="popular">POPULAR</span>}
      <IonCardHeader className="card-pricing-header">
        <span className="title">{title}</span>
        <h5>
          ${price}
          <span>/mensual</span>
        </h5>
      </IonCardHeader>
      <IonCardContent>
        <IonList className="pricing-list">
          {features.map((element, index) => (
            <IonItem className="pricing-list-item" key={index}>
              <CheckIcon />
              {element}
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
