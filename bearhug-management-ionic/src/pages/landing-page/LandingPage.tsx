import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import Header from "./../../core/components/Header";
import "./LandingPage.css";
import Hero from "./components/Hero";
import image from "./../../../public/hero-image.jpg";
import {
  sectionFour,
  sectionOne,
  sectionThree,
  sectionTwo,
} from "./constants/section_information";
import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard";
import { FEATURES } from "./constants/features";
import PricingCard from "./components/PricingCard";
import { plans } from "./constants/pricing";
import ProfileCard from "./components/ProfileCard";
import { profiles } from "./constants/profiles";
import Footer from "./components/Footer";
import Logo from "../../core/icon/Logo";

export default function LandingPage() {
  return (
    <IonPage>
      <Header />
      <IonContent className="content">
        <Hero
          image={image}
          description={sectionOne.description}
          title={sectionOne.title}
        />
        <Section
          title={sectionTwo.title}
          description={sectionThree.description}
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </Section>
        <Section
          title={sectionThree.title}
          description={sectionFour.description}
        >
          {plans.map((feature, index) => (
            <PricingCard
              key={index}
              features={feature.features}
              isPopular={feature.isPopular}
              price={feature.price}
              title={feature.title}
            />
          ))}
        </Section>
        <Section
          title={sectionFour.title}
          description={sectionFour.description}
        >
          {profiles.map((profile, index) => (
            <ProfileCard
              name={profile.name}
              biography={profile.biography}
              photo={profile.photo}
              rol={profile.rol}
              socialMediaUrl={profile.socialMediaUrl}
              key={index}
            />
          ))}
        </Section>
        <Footer
          company="Bearhug Management"
          logo={<Logo />}
          socialMediaUrl={["#", "#", "#"]}
        />
      </IonContent>
    </IonPage>
  );
}
