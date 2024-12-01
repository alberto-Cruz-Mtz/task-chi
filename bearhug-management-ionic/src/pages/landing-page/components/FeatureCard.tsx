import { IonCard } from "@ionic/react";

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  color?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  color,
}: CardProps) {
  return (
    <IonCard className="feature-card">
      <div>
        {icon}
        <h6>{title}</h6>
      </div>
      <p>{description}</p>
    </IonCard>
  );
}
