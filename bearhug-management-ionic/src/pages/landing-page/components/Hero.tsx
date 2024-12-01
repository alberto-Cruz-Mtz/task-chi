import { IonButton } from "@ionic/react";

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export default function Hero({ title, description, image }: HeroProps) {
  return (
    <main className="hero-image">
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
        <span className="container-button">
          <IonButton
            className="UI-btn"
            size="small"
            routerLink="/sign-up"
            color="primary"
          >
            Registrate ahora
          </IonButton>
          <IonButton
            className="UI-btn"
            size="small"
            routerLink="/log-in"
            color="primary"
          >
            Inicia sesión
          </IonButton>
        </span>
      </article>
      <figure>
        <img className="image" src={image} alt={title} />
      </figure>
    </main>
  );
}
