import './Opening.css';
import { CalendarDays, ArrowRight } from 'lucide-react';

function Opening() {
  return (
    <div className="container-intro">
      <div className="background-img">
        <img
          src="/images/laska_hero_intro.jpeg"
          alt="Alin-Nails-Logo"
          border="0"
        ></img>
      </div>
      <div className="intro">
        <h4>
          PROFESSIONAL <br /> NAIL CARE
        </h4>
        <div className="heart-divider">
          <span></span>
          <span>♥</span>
          <span></span>
        </div>
        <h1>
          Manicure <br /> & Eyelashes
        </h1>
        <h3>
          Beautiful, long-lasting <br /> nails with a personal touch
        </h3>
        <div className="booking-btn">
          <button>
            <CalendarDays size={18} />
            Book Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Opening;
