import './Social+Intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

function SocialIntro() {
  return (
    <section>
      <div className="Intro">
        <h1 className="main-title">Laska</h1>
        <h2 className="sub-title">Nails & Eyelashes</h2>
        <br />
        <h6 className="address">Ohel Sarah 5, Holon, Israel</h6>
      </div>

      <div className="socials">
        <div className="whatsapp">
          <a href="" target="whatapp" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="about">
          <a href="" target="" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAddressCard} />
            <span>About</span>
          </a>
        </div>

        <div className="instagram">
          <a href="" target="" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </a>
        </div>

        <div className="waze">
          <a href="" target="" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Waze</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialIntro;
