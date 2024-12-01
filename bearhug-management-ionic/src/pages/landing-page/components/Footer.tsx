import { JSX } from "react";
import FacebookIcon from "../icon/FacebookIcon";
import TwitterIcon from "../icon/TwitterIcon";
import InstagramIcon from "../icon/InstagramIcon";
import { IonFooter } from "@ionic/react";

type FooterProps = {
  logo: JSX.Element;
  company: string;
  socialMediaUrl: string[];
};

export default function Footer({ socialMediaUrl, company, logo }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="ion-footer">
      <figure>
        {logo}
        <h5>{company}</h5>
      </figure>
      <h6>
        ©{year} {company}
      </h6>
      <ul>
        <li>
          <a href={socialMediaUrl[0]}>
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href={socialMediaUrl[1]}>
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href={socialMediaUrl[2]}>
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
