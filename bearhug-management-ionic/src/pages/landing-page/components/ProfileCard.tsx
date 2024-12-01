import FacebookIcon from "../icon/FacebookIcon";
import InstagramIcon from "../icon/InstagramIcon";
import TwitterIcon from "../icon/TwitterIcon";

type ProfileProps = {
  photo: string;
  name: string;
  rol: string;
  biography: string;
  socialMediaUrl: string[];
};

export default function ProfileCard({
  rol,
  biography,
  socialMediaUrl,
  name,
  photo,
}: ProfileProps) {
  return (
    <article className="profile-card">
      <figure className="profile-card-figure">
        <img className="profile-photo" src={photo} alt="profile photo" />
      </figure>
      <div className="profile-card-content">
        <blockquote className="profile-blockquote">
          <h6 className="profile-name">{name}</h6>
          <h6 className="profile-rol profile-rol-dark">{rol}</h6>
          <p className="profile-biography">{biography}</p>
        </blockquote>
        <ul className="social-media-list">
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
      </div>
    </article>
  );
}
